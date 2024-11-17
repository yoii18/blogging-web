import { blogCreateInput } from "@yoii18/validation";
import { Context } from "hono";

export const blogCreate = async (c: Context) => {
    const body = await c.req.json();
    const { success } = blogCreateInput.safeParse(body);
    const authId = c.get("userId");
    const prisma = c.get('prisma');
    try{
        if (success){    
            const blog = await prisma.blog.create({
                data: {
                    title: body.title,
                    content: body.content,
                    authorId: authId
                }
            })
            return c.json({
                msg: "POSTED",
                title: blog.title
            });
        } else{
            c.status(411);
            return c.text("inputs invalid");
        }
    }catch(e){
        c.status(403);
        return c.text("COULD NOT POST");
    }
}