import { Context } from "hono";

export const blogGet = async (c: Context) => {
    const id = await c.req.param('id');
    const prisma = c.get('prisma');
    try{
        const blog = await prisma.blog.findFirst({
            where: {
                id: id
            },
            select: {
                content: true,
                title: true,
                id: true,
                author: {
                    select: {
                        name: true
                    }
                }
            }
        })
        return c.json({
            blog: blog
        });
    }catch(e){
        c.status(403);
        return c.text("COULD NOT FETCH");
    }
}