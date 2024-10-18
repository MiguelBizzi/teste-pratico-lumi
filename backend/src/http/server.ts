import fastifyCors from '@fastify/cors'
import fastify from 'fastify'
import { errorHandler } from './routes/error-handler'
import { getInvoices } from './routes/invoices/get-invoices'
import { getInvoicesDashboard } from './routes/invoices/get-invoices-dashboard'

const app = fastify()

app.setErrorHandler(errorHandler)

app.register(fastifyCors)

// Invoices
app.register(getInvoices)
app.register(getInvoicesDashboard)

app.listen({ port: 3333 }).then(() => {
  console.log('Server is running on port 3333')
})
