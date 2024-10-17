/*
  Warnings:

  - You are about to drop the column `contribuIlumPublica` on the `faturas` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `faturas` table. All the data in the column will be lost.
  - You are about to drop the column `energiaCompensadaKWh` on the `faturas` table. All the data in the column will be lost.
  - You are about to drop the column `energiaCompensadaValor` on the `faturas` table. All the data in the column will be lost.
  - You are about to drop the column `energiaEletricaKWh` on the `faturas` table. All the data in the column will be lost.
  - You are about to drop the column `energiaEletricaValor` on the `faturas` table. All the data in the column will be lost.
  - You are about to drop the column `energiaSCEE_KWh` on the `faturas` table. All the data in the column will be lost.
  - You are about to drop the column `energiaSCEE_Valor` on the `faturas` table. All the data in the column will be lost.
  - Added the required column `contribu_ilum_publica` to the `faturas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `energia_SCEE_KWh` to the `faturas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `energia_SCEE_valor` to the `faturas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `energia_compensada_KWh` to the `faturas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `energia_compensada_valor` to the `faturas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `energia_eletrica_KWh` to the `faturas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `energia_eletrica_valor` to the `faturas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "faturas" DROP COLUMN "contribuIlumPublica",
DROP COLUMN "createdAt",
DROP COLUMN "energiaCompensadaKWh",
DROP COLUMN "energiaCompensadaValor",
DROP COLUMN "energiaEletricaKWh",
DROP COLUMN "energiaEletricaValor",
DROP COLUMN "energiaSCEE_KWh",
DROP COLUMN "energiaSCEE_Valor",
ADD COLUMN     "contribu_ilum_publica" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "energia_SCEE_KWh" INTEGER NOT NULL,
ADD COLUMN     "energia_SCEE_valor" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "energia_compensada_KWh" INTEGER NOT NULL,
ADD COLUMN     "energia_compensada_valor" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "energia_eletrica_KWh" INTEGER NOT NULL,
ADD COLUMN     "energia_eletrica_valor" DOUBLE PRECISION NOT NULL;
