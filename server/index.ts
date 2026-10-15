import { Hono } from 'hono';
import { compress } from 'hono/compress';
import { POSTHOG_PROXY_PATH, toPostHogPath } from './posthog-paths';

const POSTHOG_API_HOST = 'us.i.posthog.com';
const POSTHOG_ASSET_HOST = 'us-assets.i.posthog.com';
const POSTHOG_TIMEOUT_MS = 15_000;

// Hop-by-hop headers (Node's fetch rejects several of them outright) and ones meant only for this origin
const DROPPED_REQUEST_HEADERS = [
    'host',
    'cookie',
    'authorization',
    'connection',
    'keep-alive',
    'transfer-encoding',
    'te',
    'trailer',
    'upgrade',
    'expect',
    'proxy-authorization',
    'proxy-connection',
    'content-length'
];
const DROPPED_RESPONSE_HEADERS = [
    'connection',
    'keep-alive',
    'transfer-encoding',
    // fetch already decoded the body, so the upstream encoding and length no longer apply
    'content-encoding',
    'content-length'
];

const app = new Hono();

// One canonical host, so analytics and search don't split across www and apex
app.use('*', async (c, next) => {
    const host = c.req.header('host');
    if (host?.startsWith('www.')) {
        const url = new URL(c.req.url);
        return c.redirect(`https://${host.slice(4)}${url.pathname}${url.search}`, 308);
    }
    await next();
});

app.use(compress());

// The Services pages were removed; send old links to the closest page
app.get('/services', (c) => c.redirect('/design-technologist', 301));
app.get('/services/*', (c) => c.redirect('/design-technologist', 301));

app.all(`${POSTHOG_PROXY_PATH}/*`, async (c) => {
    const url = new URL(c.req.url);
    const path = toPostHogPath(url.pathname.slice(POSTHOG_PROXY_PATH.length));
    const upstreamHost =
        path.startsWith('/static/') || path.startsWith('/array/')
            ? POSTHOG_ASSET_HOST
            : POSTHOG_API_HOST;

    const headers = new Headers(c.req.raw.headers);
    for (const name of DROPPED_REQUEST_HEADERS) headers.delete(name);
    // Node's fetch can't decode zstd, so only ask for encodings it can
    headers.set('accept-encoding', 'gzip, br');
    // Pass PostHog one visitor IP for GeoIP, rather than a chain that may include Railway's edge
    const visitorIp =
        c.req.header('x-real-ip') ?? c.req.header('x-forwarded-for')?.split(',')[0]?.trim();
    if (visitorIp) headers.set('x-forwarded-for', visitorIp);

    const method = c.req.method;
    let upstream: Response;
    try {
        upstream = await fetch(`https://${upstreamHost}${path}${url.search}`, {
            method,
            headers,
            body: method === 'GET' || method === 'HEAD' ? undefined : await c.req.arrayBuffer(),
            signal: AbortSignal.timeout(POSTHOG_TIMEOUT_MS)
        });
    } catch {
        return c.body(null, 502);
    }

    const responseHeaders = new Headers(upstream.headers);
    for (const name of DROPPED_RESPONSE_HEADERS) responseHeaders.delete(name);

    return new Response(upstream.body, {
        status: upstream.status,
        headers: responseHeaders
    });
});

// Long-lived cache for hashed static assets (Vite fingerprints filenames)
app.use('/assets/*', async (c, next) => {
    await next();
    c.header('Cache-Control', 'public, max-age=31536000, immutable');
});

export default app;
