import { Hono } from "hono";
import userRouter from "./users";
import blogRouter from "./blog";

const rootRouter = new Hono();

rootRouter.route('/user', userRouter);
rootRouter.route('/blog', blogRouter);

export default rootRouter;