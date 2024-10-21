export interface Invoice {
  numInstalacao: string
  faturas: {
    id: number
    numCliente: string
    mesReferencia: string
    downloadPath: string
  }[]
}
