import { serve } from '@hono/node-server';
import { serveStatic } from '@hono/node-server/serve-static';
import type { ServerBuild } from 'react-router';
import handle from 'hono-react-router-adapter/node';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
// @ts-expect-error — no declaration file for build output
import * as build from './build/server';
import server from './server';

const typedBuild = build as unknown as ServerBuild;

const __dirname = dirname(fileURLToPath(import.meta.url));

server.use(
    serveStatic({
        root: resolve(__dirname, './build/client')
    })
);

const handler = handle(typedBuild, server);

const port = Number(process.env.PORT) || 8080;

serve({ fetch: handler.fetch, port }, () => {
    console.log(`[server] http://localhost:${port}`);
});
