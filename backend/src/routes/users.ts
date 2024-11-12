import { Hono } from "hono";

const userRouter = new Hono();

userRouter.get('/test', (c) => {
    return c.text("HELLO TRIAL DONE")
});

userRouter.post('/signup', (c) => {
    return c.text("");
})

userRouter.post('/signin', (c) => {
    return c.text("");
})

export default userRouter;