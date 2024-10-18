import type { EletricXcompensated } from '@/types/chart'
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
  data: EletricXcompensated[]
}

export default function EnergyBarChart({ data }: Props) {
  return (
    <div>
      <h1 className="text-lg font-medium">Resultados de Energia (kWh)</h1>
      <p className="text-gray-500">
        Consumo de Energia Elétrica vs Energia Compensada
      </p>

      <ResponsiveContainer width="100%" height={300} className="mt-6">
        <BarChart data={data} margin={{ left: -20 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="mesReferencia" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="ConsumoEletrica" fill="#8884d8" />
          <Bar dataKey="EnergiaCompensada" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
