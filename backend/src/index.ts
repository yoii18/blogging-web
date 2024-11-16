import { Hono } from 'hono'
import rootRouter from './routes/index'
import { PrismaClient } from '@prisma/client/edge'
import { prismaGenerate } from './middlewares/prismaGenerate'

const app = new Hono <{
    Bindings: {
        DATABASE_URL: string,
        JWT_KEY: string
    },
    Variables: {
        prisma: PrismaClient
    }
}> ()

const PORT = 3000;

app.use('*', prismaGenerate)

app.route('/api/v1', rootRouter)

// app.post(, (c) => {
//   return c.text('Hello!')
// })

export default app
