/*
  Warnings:

  - Added the required column `download_path` to the `faturas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "faturas" ADD COLUMN     "download_path" TEXT NOT NULL;
