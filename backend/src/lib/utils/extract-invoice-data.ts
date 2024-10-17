import type { Fatura } from '../types/fatura'

export function extractInvoiceData(text: string): Omit<Fatura, 'id'> {
  const lines = text.split('\n')

  let numCliente: string = ''
  let mesReferencia: string = ''
  let energiaEletricaKWh: number = 0
  let energiaEletricaValor: number = 0
  let energiaSCEEKWh: number = 0
  let energiaSCEEValor: number = 0
  let energiaCompensadaKWh: number = 0
  let energiaCompensadaValor: number = 0
  let contribuIlumPublica: number = 0

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]

    if (line.includes('Referente a')) {
      if (i + 1 < lines.length) {
        const referenteLine = lines[i + 1].trim()
        mesReferencia = referenteLine.split(/\s+/)[0]
      }
    }

    if (line.includes('Nº DO CLIENTE')) {
      if (i + 1 < lines.length) {
        const clienteLine = lines[i + 1].trim()
        numCliente = clienteLine.split(/\s+/)[0]
      }
    }

    const numberPattern = /\d+([.,]\d+)?/g
    const numbers = line.match(numberPattern) as RegExpMatchArray

    if (line.includes('Energia Elétrica') && numbers.length === 4) {
      energiaEletricaKWh = Number(numbers[0])
      energiaEletricaValor = parseFloat(numbers[2].replace(',', '.'))
    } else if (line.includes('Energia SCEE s/ ICMS') && numbers.length === 4) {
      energiaSCEEKWh = Number(numbers[0])
      energiaSCEEValor = parseFloat(numbers[2].replace(',', '.'))
    } else if (
      line.includes('Energia compensada GD I') &&
      numbers.length === 4
    ) {
      energiaCompensadaKWh = Number(numbers[0])
      energiaCompensadaValor = parseFloat(numbers[2].replace(',', '.'))
    }

    if (line.includes('Contrib Ilum Publica Municipal')) {
      const match = line.match(/([\d.,]+)/)
      if (match) {
        contribuIlumPublica = parseFloat(match[0].replace(',', '.'))
      }
    }
  }

  return {
    numCliente,
    mesReferencia,
    energiaEletricaKWh,
    energiaEletricaValor,
    energiaSCEEKWh,
    energiaSCEEValor,
    energiaCompensadaKWh,
    energiaCompensadaValor,
    contribuIlumPublica,
  }
}
