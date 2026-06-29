import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => c.text('prismacode is ready for Prisma App deploys.'))

export default app
