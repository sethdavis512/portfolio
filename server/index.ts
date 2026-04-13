import { Hono } from 'hono';
import { compress } from 'hono/compress';

const app = new Hono();

app.use(compress());

// Long-lived cache for hashed static assets (Vite fingerprints filenames)
app.use('/assets/*', async (c, next) => {
    await next();
    c.header('Cache-Control', 'public, max-age=31536000, immutable');
});

export default app;
