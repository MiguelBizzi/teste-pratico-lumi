import fastifyCors from '@fastify/cors'
import fastify from 'fastify'
import { errorHandler } from './routes/error-handler'

const app = fastify()

app.setErrorHandler(errorHandler)

app.register(fastifyCors)

app.listen({ port: 3333 }).then(() => {
  console.log('Server is running on port 3333')
})
