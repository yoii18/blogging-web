import { Prisma } from "@prisma/client";
import { Context } from "hono";
import { decode, sign, verify } from "hono/jwt";

export const signUp = async (c: Context) => {
    const body = await c.req.json();
    const prisma = c.get('prisma');
    try{
        const user = await prisma.user.create({
            data: {
                email: body.email,
                name: body.name,
                password: body.password
            }
        });

        const jwt = await sign(user.id, c.env.JWT_KEY)

        return c.text(`Signup Successful, jwt: ${jwt}`);
    } catch(e){
        c.status(411);
        return c.text("INVALID");
    }
}