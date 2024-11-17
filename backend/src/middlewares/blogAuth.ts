import { Context, Next } from "hono";
import { verify } from "hono/jwt";

export const blogAuth = async (c: Context, next: Next) => {
    const authHeader = c.req.header("Authorization") || " ";
    const token = authHeader.split(" ")[1];
    const user = await verify(token, c.env.JWT_KEY)
    if (user){
        c.set("userId", user);
        await next()
    } else{
        c.status(403);
        return c.json({
            msg: "NOT LOGGED IN"
        });
    }
}