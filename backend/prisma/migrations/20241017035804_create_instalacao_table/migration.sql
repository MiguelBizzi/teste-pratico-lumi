/*
  Warnings:

  - Added the required column `num_instalacao` to the `Fatura` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Fatura" ADD COLUMN     "num_instalacao" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Instalacao" (
    "num_instalacao" TEXT NOT NULL,

    CONSTRAINT "Instalacao_pkey" PRIMARY KEY ("num_instalacao")
);

-- AddForeignKey
ALTER TABLE "Fatura" ADD CONSTRAINT "Fatura_num_instalacao_fkey" FOREIGN KEY ("num_instalacao") REFERENCES "Instalacao"("num_instalacao") ON DELETE RESTRICT ON UPDATE CASCADE;
