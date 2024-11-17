import { Hono } from "hono";
import { blogCreate } from "../controllers/blog/blogCreate";
import { blogUpdate } from "../controllers/blog/blogUpdate";
import { blogGet } from "../controllers/blog/blogGet";
import { blogBulk } from "../controllers/blog/blogBulk";
import { blogAuth } from "../middlewares/blogAuth";

const blogRouter = new Hono();

blogRouter.get("/bulk", blogBulk)

blogRouter.get("/:id", blogGet)

blogRouter.post("/", blogAuth, blogCreate)

blogRouter.put("/", blogAuth, blogUpdate)

export default blogRouter;