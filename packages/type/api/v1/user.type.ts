import { createRoute, z } from '@hono/zod-openapi';


export const listUser = createRoute({
  method: 'get',
  path: '/users',
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
});