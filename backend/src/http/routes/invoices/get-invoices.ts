import { prisma } from '@/lib/prisma'
import { FastifyInstance } from 'fastify'

export async function getInvoices(app: FastifyInstance) {
  app.get('/invoices', async (request, reply) => {
    const instalacoesWithFaturas = await prisma.instalacao.findMany({
      select: {
        numInstalacao: true,
        faturas: {
          select: {
            id: true,
            numCliente: true,
            mesReferencia: true,
            downloadPath: true,
          },
        },
      },
    })

    return reply.status(200).send(instalacoesWithFaturas)
  })
}
