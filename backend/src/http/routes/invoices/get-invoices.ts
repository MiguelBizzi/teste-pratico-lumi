import { prisma } from '@/lib/prisma'
import { FastifyInstance } from 'fastify'

export async function getInvoices(app: FastifyInstance) {
  app.get('/invoices', async (request, reply) => {
    const invoices = await prisma.fatura.findMany()

    return reply.status(200).send(invoices)
  })
}
