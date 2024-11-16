import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from "@prisma/extension-accelerate";
import { Next, Context } from 'hono';
import { createMiddleware } from 'hono/factory';

const getPrisma = (databaseURL: string) => {
    return new PrismaClient({
        datasourceUrl: databaseURL,
    }).$extends(withAccelerate())
}

type Bindings = {
    DATABASE_URL: string
}

type Variables = {
    prisma: PrismaClient
}

export const prismaGenerate = createMiddleware <{Bindings: Bindings, Variables: Variables}> (
    async (c: Context, next: Next) => {
        if (!c.get('prisma')){
            const prisma = getPrisma(c.env.DATABASE_URL); 
            c.set('prisma', prisma);
        }
        await next();
    }
)
