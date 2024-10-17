import { PrismaClient } from '@prisma/client'
import { processInvoices } from '../src/lib/utils/process-invoices'

const prisma = new PrismaClient()

async function seed() {
  await prisma.fatura.deleteMany()
  await prisma.instalacao.deleteMany()

  processInvoices()
}

seed().then(() => {
  console.log('Database seeded')
  prisma.$disconnect()
})
