import { Context } from "hono";

export const blogCreate = async (c: Context) => {
    const body = await c.req.json();
    const prisma = c.get('prisma');
    try{
        const blog = await prisma.blog.create({
            data: {
                title: body.title,
                content: body.content,
                authorId: "e533a154-3cca-4cd3-bf6e-51fcc18fd63c"
            }
        })
        return c.json({
            msg: "POSTED",
            title: blog.title
        });
    }catch(e){
        c.status(403);
        return c.text("COULD NOT POST");
    }
}