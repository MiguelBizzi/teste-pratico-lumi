import { prisma } from '@/lib/prisma'
import { FastifyInstance } from 'fastify'

export async function getInvoicesDashboard(app: FastifyInstance) {
  app.get('/invoices/dashboard', async (request, reply) => {
    const invoices = await prisma.fatura.findMany({
      select: {
        mesReferencia: true,
        energiaEletricaKWh: true,
        energiaCompensadaKWh: true,
        energiaEletricaValor: true,
        energiaCompensadaValor: true,
      },
    })

    const eletricXCompensated = invoices.reduce(
      (acc, invoice) => {
        const month = invoice.mesReferencia
        const eletric = invoice.energiaEletricaKWh
        const compensated = invoice.energiaCompensadaKWh

        if (!acc[month]) {
          acc[month] = {
            ConsumoEletrica: 0,
            EnergiaCompensada: 0,
          }
        }

        acc[month].ConsumoEletrica += eletric
        acc[month].EnergiaCompensada += compensated

        return acc
      },
      {} as Record<
        string,
        { ConsumoEletrica: number; EnergiaCompensada: number }
      >
    )

    const eletricXCompensatedArray = Object.entries(eletricXCompensated).map(
      ([month, values]) => ({
        mesReferencia: month,
        ...values,
      })
    )

    const totalWithoutCompensatedXCompensated = invoices.reduce(
      (acc, invoice) => {
        const month = invoice.mesReferencia
        const totalWithoutCompensated = invoice.energiaEletricaValor
        const compensated = invoice.energiaCompensadaValor

        if (!acc[month]) {
          acc[month] = {
            ValorTotalSemGDR$: 0,
            EconomiaGDR: 0,
          }
        }

        acc[month].ValorTotalSemGDR$ += totalWithoutCompensated
        acc[month].EconomiaGDR += compensated

        return acc
      },
      {} as Record<string, { ValorTotalSemGDR$: number; EconomiaGDR: number }>
    )

    const totalWithoutCompensatedXCompensatedArray = Object.entries(
      totalWithoutCompensatedXCompensated
    ).map(([month, values]) => ({
      mesReferencia: month,
      ...values,
    }))

    return reply.status(200).send({
      eletricXCompensated: eletricXCompensatedArray,
      totalWithoutCompensatedXCompensated:
        totalWithoutCompensatedXCompensatedArray,
    })
  })
}
