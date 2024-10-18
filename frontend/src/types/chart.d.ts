export interface DashboardResponse {
  eletricXCompensated: EletricXcompensated[]
  totalWithoutCompensatedXCompensated: TotalWithoutCompensatedXcompensated[]
}

export interface EletricXcompensated {
  ConsumoEletrica: number
  EnergiaCompensada: number
  mesReferencia: string
}

export interface TotalWithoutCompensatedXcompensated {
  EconomiaGDR: number
  ValorTotalSemGDR$: number
  mesReferencia: string
}
