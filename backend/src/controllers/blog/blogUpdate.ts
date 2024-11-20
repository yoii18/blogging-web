import { blogUpdateInput } from "@yoii18/validation";
import { Context } from "hono";

export const blogUpdate = async (c: Context) => {
    const body = await c.req.json();
    const { success } = blogUpdateInput.safeParse(body);
    const authId = c.get("userId");
    const prisma = c.get('prisma');
    try{
        if (success) {    
            const blog = await prisma.blog.update({
                where: {
                    id: body.id,
                    authorId: authId
                },
                data: {
                    title: body.title,
                    content: body.content,
                }
            })
            return c.json({
                msg: "UPDATED",
                title: blog.title,
                id: blog.id
            });
        } else{
            c.status(403);
            return c.text("inputs invalid");
        }
    }catch(e){
        console.log(e)
        c.status(403);
        return c.text("COULD NOT UPDATE");
    }
}