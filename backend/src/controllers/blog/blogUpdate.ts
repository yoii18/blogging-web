import { Context } from "hono";

export const blogUpdate = async (c: Context) => {
    const body = await c.req.json();
    const prisma = c.get('prisma');
    try{
        const blog = await prisma.blog.update({
            where: {
                id: body.id
            },
            data: {
                title: body.title,
                content: body.content,
            }
        })
        return c.json({
            msg: "UPDATED",
            title: blog.title
        });
    }catch(e){
        c.status(403);
        return c.text("COULD NOT UPDATE");
    }
}