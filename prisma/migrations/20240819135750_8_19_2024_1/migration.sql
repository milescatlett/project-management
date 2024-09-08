/*
  Warnings:

  - A unique constraint covering the columns `[Client_ID]` on the table `Person` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Person" ADD COLUMN     "Client_ID" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "Person_Client_ID_key" ON "Person"("Client_ID");
