import { Prisma } from "@prisma/client";
import { signinInput } from "@yoii18/validation";
import { Context } from "hono";
import { decode, sign, verify } from "hono/jwt";

export const signIn = async (c: Context) => {
    const body = await c.req.json();
    const { success } = signinInput.safeParse(body);
    const prisma = c.get('prisma');
    try{
        if (success){
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
                return c.text(`Bearer ${jwt}`);
            }
        } else{
            c.status(411)
            return c.text("invalid creds");
        }
    } catch(e){
        c.status(411);
        return c.text("INVALID");
    }
}