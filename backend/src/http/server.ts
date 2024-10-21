import fastifyCors from '@fastify/cors'
import fastify from 'fastify'
import { errorHandler } from './routes/error-handler'
import { getInvoices } from './routes/invoices/get-invoices'
import { getInvoicesDashboard } from './routes/invoices/get-invoices-dashboard'
import path from 'path'
import { downloadInvoice } from './routes/invoices/download-invoice'

const app = fastify()

app.setErrorHandler(errorHandler)

app.register(fastifyCors)

app.register(require('@fastify/static'), {
  root: path.join(__dirname, '../../src/assets/Faturas'),
  prefix: '/invoices/download', // Public URL path to serve the files
})

// Invoices
app.register(getInvoices)
app.register(getInvoicesDashboard)
app.register(downloadInvoice)

app.listen({ port: 3333 }).then(() => {
  console.log('Server is running on port 3333')
})
