import { OpenAPIHono } from '@hono/zod-openapi';
import * as userRouter from '@tarquin/types/api/v1/user.type';


export function initOpenAPIRouter(app: OpenAPIHono) {
  const v1Router = new OpenAPIHono();

  v1Router.openapi(userRouter.listUser, (c) => {
    return c.json({});
  });

  app.route('/api/v1', v1Router);
}
