import { Hono } from 'hono';
import { compress } from 'hono/compress';

/** Same-origin path for PostHog traffic, so ad blockers don't drop it. Kept in sync with `api_host` in app/root.tsx. */
const POSTHOG_PROXY_PATH = '/lantern';
const POSTHOG_API_HOST = 'us.i.posthog.com';
const POSTHOG_ASSET_HOST = 'us-assets.i.posthog.com';

// Hop-by-hop and origin-specific headers that shouldn't be forwarded to PostHog
const DROPPED_REQUEST_HEADERS = ['host', 'cookie', 'connection', 'content-length'];

const app = new Hono();

// One canonical host, so analytics and search don't split across www and apex
app.use('*', async (c, next) => {
    const host = c.req.header('host');
    if (host?.startsWith('www.')) {
        const url = new URL(c.req.url);
        return c.redirect(`https://${host.slice(4)}${url.pathname}${url.search}`, 301);
    }
    await next();
});

// The Services pages were removed; send old links to the closest page
app.get('/services', (c) => c.redirect('/design-technologist', 301));
app.get('/services/*', (c) => c.redirect('/design-technologist', 301));

app.all(`${POSTHOG_PROXY_PATH}/*`, async (c) => {
    const url = new URL(c.req.url);
    const path = url.pathname.slice(POSTHOG_PROXY_PATH.length);
    const upstreamHost =
        path.startsWith('/static/') || path.startsWith('/array/')
            ? POSTHOG_ASSET_HOST
            : POSTHOG_API_HOST;

    const headers = new Headers(c.req.raw.headers);
    for (const name of DROPPED_REQUEST_HEADERS) headers.delete(name);

    const method = c.req.method;
    const upstream = await fetch(`https://${upstreamHost}${path}${url.search}`, {
        method,
        headers,
        body: method === 'GET' || method === 'HEAD' ? undefined : await c.req.arrayBuffer()
    });

    // fetch already decoded the body, so the upstream encoding and length no longer apply
    const responseHeaders = new Headers(upstream.headers);
    responseHeaders.delete('content-encoding');
    responseHeaders.delete('content-length');

    return new Response(upstream.body, {
        status: upstream.status,
        headers: responseHeaders
    });
});

app.use(compress());

// Long-lived cache for hashed static assets (Vite fingerprints filenames)
app.use('/assets/*', async (c, next) => {
    await next();
    c.header('Cache-Control', 'public, max-age=31536000, immutable');
});

export default app;
