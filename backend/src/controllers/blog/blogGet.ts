import { Context } from "hono";

export const blogGet = async (c: Context) => {
    const id = await c.req.param('id');
    const prisma = c.get('prisma');
    try{
        const blog = await prisma.blog.findFirst({
            where: {
                id: id
            }
        })
        return c.json({
            msg: "FETCHED",
            title: blog.title,
            content: blog.content
        });
    }catch(e){
        c.status(403);
        return c.text("COULD NOT FETCH");
    }
}