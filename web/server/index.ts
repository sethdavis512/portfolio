import { Hono } from 'hono';
import { compress } from 'hono/compress';

const app = new Hono();

app.use(compress());

export default app;
