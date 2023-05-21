import 'dotenv/config'
import cors from '@fastify/cors'
import fastify from 'fastify'
import { memoriesRoutes } from './routes/memories'
import { authRoutes } from './routes/auth'
import jwt from '@fastify/jwt'

const app = fastify()

app.register(cors, {
  origin: '*',
})

app.register(jwt, {
  secret: '2d9313a0439d8955f73980bf434840c15b40b854',
})

app.register(authRoutes)
app.register(memoriesRoutes)

app
  .listen({
    port: 3333,
  })
  .then(() => console.log('HTTP server running on http://localhost:3333'))
