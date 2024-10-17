export interface Fatura {
  id: string
  numCliente: string
  mesReferencia: string
  energiaEletricaKWh: number
  energiaEletricaValor: number
  energiaSCEEKWh: number
  energiaSCEEValor: number
  energiaCompensadaKWh: number
  energiaCompensadaValor: number
  contribuIlumPublica: number
}
