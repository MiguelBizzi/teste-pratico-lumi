import type { TotalWithoutCompensatedXcompensated } from '@/types/chart'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

interface Props {
  data: TotalWithoutCompensatedXcompensated[]
}

export default function FinancialBarChart({ data }: Props) {
  return (
    <div>
      <h1 className="text-lg font-medium">Resultados Financeiros (R$)</h1>
      <p className="text-gray-500">Valor Total sem GD vs Economia GD</p>

      <ResponsiveContainer width="100%" height={300} className="mt-6">
        <BarChart data={data} margin={{ left: -20 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="mesReferencia" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="ValorTotal" fill="#ffc658" />
          <Bar dataKey="EconomiaGDR" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
