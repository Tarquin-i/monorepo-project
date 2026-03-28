import { OpenAPIHono } from '@hono/zod-openapi';
import { initOpenAPIRouter } from './api/route';

const app = new OpenAPIHono();

initOpenAPIRouter(app);

export default app;
