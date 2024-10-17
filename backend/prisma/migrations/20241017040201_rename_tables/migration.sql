/*
  Warnings:

  - You are about to drop the `Fatura` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Instalacao` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Fatura" DROP CONSTRAINT "Fatura_num_instalacao_fkey";

-- DropTable
DROP TABLE "Fatura";

-- DropTable
DROP TABLE "Instalacao";

-- CreateTable
CREATE TABLE "instalacoes" (
    "num_instalacao" TEXT NOT NULL,

    CONSTRAINT "instalacoes_pkey" PRIMARY KEY ("num_instalacao")
);

-- CreateTable
CREATE TABLE "faturas" (
    "id" SERIAL NOT NULL,
    "num_cliente" TEXT NOT NULL,
    "mes_referencia" TEXT NOT NULL,
    "energiaEletricaKWh" INTEGER NOT NULL,
    "energiaEletricaValor" DOUBLE PRECISION NOT NULL,
    "energiaSCEE_KWh" INTEGER NOT NULL,
    "energiaSCEE_Valor" DOUBLE PRECISION NOT NULL,
    "energiaCompensadaKWh" INTEGER NOT NULL,
    "energiaCompensadaValor" DOUBLE PRECISION NOT NULL,
    "contribuIlumPublica" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "num_instalacao" TEXT NOT NULL,

    CONSTRAINT "faturas_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "faturas" ADD CONSTRAINT "faturas_num_instalacao_fkey" FOREIGN KEY ("num_instalacao") REFERENCES "instalacoes"("num_instalacao") ON DELETE RESTRICT ON UPDATE CASCADE;
