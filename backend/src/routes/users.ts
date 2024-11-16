import { Hono } from "hono";
import { signUp } from "../controllers/user/signup";
import { signIn } from "../controllers/user/signin";

const userRouter = new Hono();

userRouter.get('/test', (c) => {
    return c.text("HELLO TRIAL DONE")
});

userRouter.post('/signup', signUp)

userRouter.post('/signin', signIn)

export default userRouter;