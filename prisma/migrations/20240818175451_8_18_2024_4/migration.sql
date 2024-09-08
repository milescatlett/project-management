/*
  Warnings:

  - Added the required column `Client_Name` to the `Client` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Accounting_Name` to the `accounting` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Owner_Name` to the `owners` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Primary_Contact_Name` to the `primary_contacts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Client" ADD COLUMN     "Client_Name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "accounting" ADD COLUMN     "Accounting_Name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "owners" ADD COLUMN     "Owner_Name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "primary_contacts" ADD COLUMN     "Primary_Contact_Name" TEXT NOT NULL;
