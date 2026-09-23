import { createHmac, timingSafeEqual } from 'node:crypto';

// Server-only. Two layers of bot resistance for the Airtable contact forms:
//
//   1. Hard signals (honeypot filled, no form token at all) mean the request
//      never came through a rendered form. We drop it and pretend it worked so
//      the operator has nothing to learn from.
//   2. Soft signals (links, sales-pitch phrasing, suspicious timing) add up to
//      a score. Anything over the threshold is still written to Airtable, but
//      tagged in Note so it can be filtered out of views and notifications.
//
// Nothing here changes the Airtable schema; the "Customers" table only has
// First name / Last name / Email / Note, so the verdict is folded into Note.

export const HONEYPOT_FIELD = 'website';
export const TOKEN_FIELD = 'formToken';

const MIN_FILL_MS = 3_000;
const MAX_FILL_MS = 2 * 60 * 60 * 1_000;
const SUSPECT_THRESHOLD = 2;

const URL_PATTERN = /(?:https?:\/\/|www\.)[^\s<>"')]+/gi;

// Phrases that show up in cold-outreach templates far more often than in a
// real inquiry. Kept deliberately short; each hit is only worth one point.
const PITCH_PHRASES = [
    'lead generation',
    'generate more leads',
    'web visitors',
    'website owner',
    'website traffic',
    'search engine',
    'seo services',
    'backlink',
    'guest post',
    'rank higher',
    'first page of google',
    'live demo',
    'cost-effective',
    'boost your',
    'grow your business'
];

export type SpamVerdict = 'clean' | 'suspect' | 'bot';

export interface SpamCheck {
    verdict: SpamVerdict;
    score: number;
    reasons: string[];
}

function getSecret() {
    return process.env.FORM_TOKEN_SECRET ?? '';
}

function sign(payload: string, secret: string) {
    return createHmac('sha256', secret).update(payload).digest('hex');
}

/**
 * Mint a signed timestamp for a hidden form field. Called from loaders on
 * every render of a form page. Returns an unsigned timestamp when the secret
 * is not configured so the form keeps working; timing checks are skipped in
 * that case.
 */
export function mintFormToken() {
    const issuedAt = String(Date.now());
    const secret = getSecret();
    if (!secret) return issuedAt;
    return `${issuedAt}.${sign(issuedAt, secret)}`;
}

type TokenState = 'valid' | 'missing' | 'invalid' | 'too-fast' | 'too-old';

function verifyFormToken(token: string): TokenState {
    if (!token) return 'missing';

    const [issuedAtRaw, signature = ''] = token.split('.');
    const issuedAt = Number(issuedAtRaw);
    if (!Number.isFinite(issuedAt)) return 'invalid';

    const secret = getSecret();
    if (secret) {
        const expected = sign(issuedAtRaw, secret);
        if (
            signature.length !== expected.length ||
            !timingSafeEqual(Buffer.from(signature), Buffer.from(expected))
        ) {
            return 'invalid';
        }
    }

    const elapsed = Date.now() - issuedAt;
    if (elapsed < MIN_FILL_MS) return 'too-fast';
    if (elapsed > MAX_FILL_MS) return 'too-old';
    return 'valid';
}

interface SubmissionInput {
    formData: FormData;
    note?: string;
}

export function checkSubmission({ formData, note = '' }: SubmissionInput): SpamCheck {
    const honeypot = String(formData.get(HONEYPOT_FIELD) ?? '').trim();
    const token = String(formData.get(TOKEN_FIELD) ?? '').trim();

    // Hard signals: only a script that never rendered the form trips these.
    if (honeypot) {
        return { verdict: 'bot', score: Infinity, reasons: ['honeypot filled'] };
    }

    const tokenState = verifyFormToken(token);
    if (tokenState === 'missing') {
        return { verdict: 'bot', score: Infinity, reasons: ['no form token'] };
    }

    const reasons: string[] = [];
    let score = 0;

    if (tokenState === 'invalid') {
        score += 2;
        reasons.push('bad token signature');
    } else if (tokenState === 'too-fast') {
        score += 2;
        reasons.push(`submitted in under ${MIN_FILL_MS / 1000}s`);
    } else if (tokenState === 'too-old') {
        score += 1;
        reasons.push('form token expired');
    }

    const links = note.match(URL_PATTERN) ?? [];
    if (links.length > 0) {
        score += links.length * 2;
        reasons.push(`${links.length} link${links.length === 1 ? '' : 's'}`);
    }

    const lowerNote = note.toLowerCase();
    const phraseHits = PITCH_PHRASES.filter((phrase) => lowerNote.includes(phrase));
    if (phraseHits.length > 0) {
        score += Math.min(phraseHits.length, 3);
        reasons.push(`matched "${phraseHits.slice(0, 3).join('", "')}"`);
    }

    if (note.length > 800 && links.length > 0) {
        score += 1;
        reasons.push('long note with links');
    }

    return {
        verdict: score >= SUSPECT_THRESHOLD ? 'suspect' : 'clean',
        score,
        reasons
    };
}

/**
 * Prefix for the Airtable Note field. Empty for clean submissions so existing
 * records and automations keep their current shape; suspect ones get a tag
 * that filter views and automation conditions can match on with
 * `FIND("[Suspect", {Note})`.
 */
export function formatSpamTag(check: SpamCheck) {
    if (check.verdict !== 'suspect') return '';
    return `[Suspect · score ${check.score}: ${check.reasons.join(', ')}]`;
}
