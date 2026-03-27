import { OpenAPIHono, createRoute } from '@hono/zod-openapi';
import { z } from 'zod';

const app = new OpenAPIHono();

app.openapi(
  createRoute({
    method: 'get',
    path: '/1',
    responses: {
      200: {
        content: {
          'application/json': {
            schema: z.object({}),
          },
        },
        description: 'Retrieve the user',
      },
    },
  }),
  (c) => {
    return c.json({});
  },
);

// app.get('/', (c) => {
//   return c.text('Hello Hono!')
// })

export default app;
