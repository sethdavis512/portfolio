/** Sends a PostHog event. Does nothing on the server or on localhost, where PostHog isn't loaded. */
export function track(event: string, properties?: Record<string, unknown>) {
    if (typeof window === 'undefined') return;
    window.posthog?.capture(event, properties);
}
