import { Prisma } from "@prisma/client";
import { Context } from "hono";
import { decode, sign, verify } from "hono/jwt";

export const signIn = async (c: Context) => {
    const body = await c.req.json();
    const prisma = c.get('prisma');
    try{
        const user = await prisma.user.findFirst({
            where: {
                email: body.email,
                password: body.password
            }
        });

        if (!user){
            c.status(403)
            return c.text("unauthorized creds");
        } else{
            const jwt = await sign(user.id, c.env.JWT_KEY)
            return c.text(`Signin Successful, jwt: ${jwt}`);
        }
    } catch(e){
        c.status(411);
        return c.text("INVALID");
    }
}