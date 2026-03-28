import { OpenAPIHono } from '@hono/zod-openapi';
import { initOpenAPIRouter } from './api/route';
import { auth } from './lib/auth';

const app = new OpenAPIHono();

initOpenAPIRouter(app);
app.on(['POST', 'GET'], '/api/auth/*', (c) => auth.handler(c.req.raw));
// cors
app.use('*', async (c, next) => {
  c.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  c.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  c.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  c.header('Access-Control-Allow-Credentials', 'true');
  if (c.req.method === 'OPTIONS') {
    return c.text('OK');
  }
  await next();
});

export default app;
