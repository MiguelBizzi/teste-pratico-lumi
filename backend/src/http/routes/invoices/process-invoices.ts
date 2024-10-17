import { FastifyInstance } from 'fastify'
import fs from 'fs'
import path from 'path'
import pdfParse from 'pdf-parse'
import { extractInvoiceData } from '@/lib/utils/extract-invoice-data'
import { prisma } from '@/lib/prisma'

export async function processInvoices(app: FastifyInstance) {
  app.post('/invoices/process', async (request, reply) => {
    const srcDirectory = path.join(__dirname, '../../../../src')
    const invoicesDir = path.join(srcDirectory, 'assets/Faturas')

    const instalations = fs.readdirSync(invoicesDir)

    for (const instalacao of instalations) {
      await prisma.instalacao.create({
        data: {
          numInstalacao: instalacao,
        },
      })

      const instalationDir = path.join(invoicesDir, instalacao)
      const invoicesFiles = fs.readdirSync(instalationDir)

      for (const file of invoicesFiles) {
        const filePath = path.join(instalationDir, file)

        const dataBuffer = fs.readFileSync(filePath)
        const data = await pdfParse(dataBuffer)

        const faturaData = extractInvoiceData(data.text)

        await prisma.fatura.create({
          data: {
            ...faturaData,
            instalacao: {
              connect: {
                numInstalacao: instalacao,
              },
            },
          },
        })
      }
    }

    reply.send({ message: 'Faturas processadas com sucesso!' })
  })
}
