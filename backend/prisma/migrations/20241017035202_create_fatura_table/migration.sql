-- CreateTable
CREATE TABLE "Fatura" (
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

    CONSTRAINT "Fatura_pkey" PRIMARY KEY ("id")
);
