import { Hono } from 'hono'
import rootRouter from './routes'

const app = new Hono()

const PORT = 3000;

app.route('/api/v1', rootRouter)

// app.post(, (c) => {
//   return c.text('Hello!')
// })

export default app
