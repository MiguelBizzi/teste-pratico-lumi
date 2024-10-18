import EnergyBarChart from '@/components/energy-bar-chart'
import FinancialBarChart from '@/components/financial-bar-chart'
import { api } from '@/lib/api'
import type { DashboardResponse } from '@/types/chart'
import { LoaderCircle } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function DashboardPage() {
  const [data, setData] = useState<DashboardResponse>({} as DashboardResponse)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isError, setIsError] = useState<boolean>(false)

  async function fetchData() {
    try {
      setIsLoading(true)
      const response = await api('/invoices/dashboard')
      const data: DashboardResponse = await response.json()

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

  useEffect(() => {
    fetchData()
  }, [])

  if (isError) {
    return <div>Erro ao carregar os dados</div>
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p className="text-gray-500">
        Confira as informações mais importantes sobre suas faturas.
      </p>

      {isLoading ? (
        <div className="mt-4 flex items-center justify-center">
          <LoaderCircle className="h-6 w-6 animate-spin text-green-700" />
        </div>
      ) : (
        <div className="mt-6 space-y-6">
          <EnergyBarChart data={data.eletricXCompensated} />
          <FinancialBarChart data={data.totalWithoutCompensatedXCompensated} />
        </div>
      )}
    </div>
  )
}
