import { Context } from "hono";

export const blogBulk = async (c: Context) => {
    console.log("FUNCTION")
    const prisma = c.get('prisma');
    try{
        console.log('hello');
        const blog = await prisma.blog.findMany({
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
        });
        return c.json({
            blogs: blog
        })
    }catch(e){
       console.log(e);
       c.status(403);
       return c.text("COULD NOT FETCH");
    }
}