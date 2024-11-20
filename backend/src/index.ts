import { Hono } from 'hono'
import rootRouter from './routes/index'
import { PrismaClient } from '@prisma/client/edge'
import { prismaGenerate } from './middlewares/prismaGenerate'
import { cors } from 'hono/cors'

const app = new Hono <{
    Bindings: {
        DATABASE_URL: string,
        JWT_KEY: string
    },
    Variables: {
        prisma: PrismaClient,
        userId: string
    }
}> ()

const PORT = 3000;

app.use('*', cors())
app.use('*', prismaGenerate)

app.route('/api/v1', rootRouter)

// app.post(, (c) => {
//   return c.text('Hello!')
// })

export default app
