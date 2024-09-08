/*
  Warnings:

  - Added the required column `Total_Billable` to the `Task` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Total_Nonbillable` to the `Task` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Total_Billable` to the `projects` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Total_Nonbillable` to the `projects` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Total_Billable` to the `subtasks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Total_Nonbillable` to the `subtasks` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Task" ADD COLUMN     "Total_Billable" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "Total_Nonbillable" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "projects" ADD COLUMN     "Total_Billable" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "Total_Nonbillable" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "subtasks" ADD COLUMN     "Total_Billable" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "Total_Nonbillable" DOUBLE PRECISION NOT NULL;

-- CreateTable
CREATE TABLE "Invoice" (
    "Invoice_ID" SERIAL NOT NULL,
    "Organization_ID" INTEGER NOT NULL,
    "Client_ID" INTEGER NOT NULL,
    "Total_Billed" DOUBLE PRECISION NOT NULL,
    "Total_Hours" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Invoice_pkey" PRIMARY KEY ("Invoice_ID")
);

-- CreateIndex
CREATE UNIQUE INDEX "Invoice_Organization_ID_key" ON "Invoice"("Organization_ID");

-- CreateIndex
CREATE UNIQUE INDEX "Invoice_Client_ID_key" ON "Invoice"("Client_ID");

-- AddForeignKey
ALTER TABLE "Invoice" ADD CONSTRAINT "organization_invoice_fkey" FOREIGN KEY ("Invoice_ID") REFERENCES "organizations"("Organization_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invoice" ADD CONSTRAINT "Invoice_Invoice_ID_fkey" FOREIGN KEY ("Invoice_ID") REFERENCES "Client"("Client_ID") ON DELETE RESTRICT ON UPDATE CASCADE;
