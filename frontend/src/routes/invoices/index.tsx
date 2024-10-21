import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/table'
import { months } from '@/constants/months'
import { api } from '@/lib/api'
import type { Invoice } from '@/types/invoices'
import { Download, LoaderCircle } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function InvoicesPage() {
  const [data, setData] = useState<Invoice[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isError, setIsError] = useState<boolean>(false)

  const year = '2024'

  async function fetchData() {
    try {
      setIsLoading(true)
      const response = await api('/invoices')
      const data: Invoice[] = await response.json()

      console.log(response)
      console.log(data)

      setData(data)
    } catch (err) {
      console.log(err)

      setIsError(true)
    } finally {
      setIsLoading(false)
    }
  }

  async function downloadInvoice(id: number, downloadPath: string) {
    try {
      const response = await api(`/invoices/download`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id,
        }),
      })

      const blob = await response.blob()

      const url = window.URL.createObjectURL(blob)

      const link = document.createElement('a')
      link.href = url
      link.setAttribute('download', downloadPath)
      document.body.appendChild(link)
      link.click()
      if (link.parentNode) link.parentNode.removeChild(link)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (isError) {
    return <div>Erro ao carregar os dados</div>
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">Faturas</h1>
      <p className="text-gray-500">
        Gerencie suas faturas aqui e tenha controle sobre suas finanças.
      </p>

      {isLoading ? (
        <div className="mt-4 flex items-center justify-center">
          <LoaderCircle className="h-6 w-6 animate-spin text-green-700" />
        </div>
      ) : (
        <div className="mt-6 space-y-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Num. Instalação</TableHead>
                <TableHead>Num. Cliente</TableHead>
                {months.map((month) => (
                  <TableHead key={month}>{month}</TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((invoice) => (
                <TableRow key={invoice.numInstalacao}>
                  <TableCell>{invoice.numInstalacao}</TableCell>
                  <TableCell>{invoice.faturas[0].numCliente}</TableCell>
                  {months.map((month) => {
                    const mesReferencia = `${month}/${year}`
                    const fatura = invoice.faturas.find(
                      (f) => f.mesReferencia == mesReferencia,
                    )

                    return (
                      <TableCell key={month}>
                        <button
                          disabled={!fatura}
                          className="h-9 w-9 disabled:cursor-not-allowed disabled:text-gray-500"
                          onClick={() =>
                            downloadInvoice(
                              fatura?.id as number,
                              fatura?.downloadPath as string,
                            )
                          }
                        >
                          <Download className="size-4" />
                        </button>
                      </TableCell>
                    )
                  })}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  )
}
