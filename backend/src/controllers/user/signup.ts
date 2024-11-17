import { Prisma } from "@prisma/client";
import { Context } from "hono";
import { decode, sign, verify } from "hono/jwt";
import { signupInput } from "@yoii18/validation"

export const signUp = async (c: Context) => {
    const body = await c.req.json();
    const {success} = signupInput.safeParse(body);
    const prisma = c.get('prisma');
    try{
        if (success){
            const user = await prisma.user.create({
                data: {
                    email: body.email,
                    name: body.name,
                    password: body.password
                }
            });
            const jwt = await sign(user.id, c.env.JWT_KEY)
            return c.text(`Signup Successful, jwt: ${jwt}`);
        }
        else{
            c.status(403)
            return c.text("inputs not valid");
        }
    } catch(e){
        c.status(411);
        return c.text("INVALID");
    }
}