import { prisma } from '@/lib/prisma'
import { FastifyInstance } from 'fastify'

export async function downloadInvoice(app: FastifyInstance) {
  app.post('/invoices/download', async (request, reply) => {
    const { id: faturaId } = request.body as {
      id: number
    }

    const fatura = await prisma.fatura.findUnique({
      where: {
        id: Number(faturaId),
      },
    })

    if (!fatura) {
      return reply.status(404).send({ message: 'Invoice not found' })
    }

    return reply.sendFile(`${fatura.numInstalacao}/${fatura.downloadPath}`)
  })
}
