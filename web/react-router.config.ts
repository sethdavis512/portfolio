import type { Config } from '@react-router/dev/config';

export default {
    ssr: true,
    async prerender() {
        return [
            `/`,
            `/about`,
            `/resume`,
            `/setup`,
            `/truck`,
            `/projects/tws-cms`,
            `/projects/tws-starter`
        ];
    }
} satisfies Config;
