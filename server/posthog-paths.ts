/** Same-origin path for PostHog traffic, so ad blockers don't drop it. Shared by the proxy (server/index.ts) and posthog-js (app/root.tsx). */
export const POSTHOG_PROXY_PATH = '/lantern';

/**
 * PostHog endpoints get neutral names in the browser, because blocklists match
 * the standard ones on any domain (uBlock's `/e/*^ip=*^compression=`, for one).
 * Longest prefix first. Paths not listed pass through unchanged.
 */
const PATH_REWRITES: Array<[posthogPath: string, browserPath: string]> = [
    ['/i/v0/e/', '/w2/'],
    ['/e/', '/w/'],
    ['/s/', '/r/'],
    ['/flags/', '/g/'],
    ['/array/', '/c/']
];

function swapPrefix(path: string, from: 0 | 1) {
    const to = from === 0 ? 1 : 0;
    const match = PATH_REWRITES.find(function (pair) {
        return path.startsWith(pair[from]);
    });
    return match ? match[to] + path.slice(match[from].length) : path;
}

/** `/e/?ip=0` becomes `/w/?ip=0`, for posthog-js's `rewriteRequestPath`. */
export function toBrowserPath(posthogPath: string) {
    return swapPrefix(posthogPath, 0);
}

/** `/w/?ip=0` becomes `/e/?ip=0`, so the proxy can call PostHog. */
export function toPostHogPath(browserPath: string) {
    return swapPrefix(browserPath, 1);
}
