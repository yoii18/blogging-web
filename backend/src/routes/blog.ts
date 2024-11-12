import { Hono } from "hono";

const blogRouter = new Hono()

blogRouter.post("/", (c) => {
    return c.text("");
})

blogRouter.put("/", (c) => {
    return c.text("");
})

blogRouter.get("/:id", (c) => {
    return c.text("");
})

blogRouter.get("/bulk", (c) => {
    return c.text("");
})

export default blogRouter;