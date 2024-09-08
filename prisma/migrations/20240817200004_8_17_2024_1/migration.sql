/*
  Warnings:

  - You are about to drop the column `Address1_Mailing` on the `Client` table. All the data in the column will be lost.
  - You are about to drop the column `Address1_Physical` on the `Client` table. All the data in the column will be lost.
  - You are about to drop the column `Address2_Mailing` on the `Client` table. All the data in the column will be lost.
  - You are about to drop the column `Address2_Physical` on the `Client` table. All the data in the column will be lost.
  - You are about to drop the column `City_Mailing` on the `Client` table. All the data in the column will be lost.
  - You are about to drop the column `City_Physical` on the `Client` table. All the data in the column will be lost.
  - You are about to drop the column `Client_Name` on the `Client` table. All the data in the column will be lost.
  - You are about to drop the column `Client_Type` on the `Client` table. All the data in the column will be lost.
  - You are about to drop the column `Company_Profile` on the `Client` table. All the data in the column will be lost.
  - You are about to drop the column `Internal_Notes` on the `Client` table. All the data in the column will be lost.
  - You are about to drop the column `Logo_URL` on the `Client` table. All the data in the column will be lost.
  - You are about to drop the column `Number_of_Contractors` on the `Client` table. All the data in the column will be lost.
  - You are about to drop the column `State_Mailing` on the `Client` table. All the data in the column will be lost.
  - You are about to drop the column `State_Physical` on the `Client` table. All the data in the column will be lost.
  - You are about to drop the column `Status` on the `Client` table. All the data in the column will be lost.
  - You are about to drop the column `Website_URL` on the `Client` table. All the data in the column will be lost.
  - You are about to drop the column `Zip_Mailing` on the `Client` table. All the data in the column will be lost.
  - You are about to drop the column `Zip_Physical` on the `Client` table. All the data in the column will be lost.
  - You are about to drop the column `Accounting_Email` on the `accounting` table. All the data in the column will be lost.
  - You are about to drop the column `Accounting_Name` on the `accounting` table. All the data in the column will be lost.
  - You are about to drop the column `Accounting_Phone` on the `accounting` table. All the data in the column will be lost.
  - You are about to drop the column `Owner_Email` on the `owners` table. All the data in the column will be lost.
  - You are about to drop the column `Owner_Name` on the `owners` table. All the data in the column will be lost.
  - You are about to drop the column `Owner_Phone` on the `owners` table. All the data in the column will be lost.
  - You are about to drop the column `Primary_Email` on the `primary_contacts` table. All the data in the column will be lost.
  - You are about to drop the column `Primary_Name` on the `primary_contacts` table. All the data in the column will be lost.
  - You are about to drop the column `Primary_Phone` on the `primary_contacts` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Client" DROP COLUMN "Address1_Mailing",
DROP COLUMN "Address1_Physical",
DROP COLUMN "Address2_Mailing",
DROP COLUMN "Address2_Physical",
DROP COLUMN "City_Mailing",
DROP COLUMN "City_Physical",
DROP COLUMN "Client_Name",
DROP COLUMN "Client_Type",
DROP COLUMN "Company_Profile",
DROP COLUMN "Internal_Notes",
DROP COLUMN "Logo_URL",
DROP COLUMN "Number_of_Contractors",
DROP COLUMN "State_Mailing",
DROP COLUMN "State_Physical",
DROP COLUMN "Status",
DROP COLUMN "Website_URL",
DROP COLUMN "Zip_Mailing",
DROP COLUMN "Zip_Physical";

-- AlterTable
ALTER TABLE "accounting" DROP COLUMN "Accounting_Email",
DROP COLUMN "Accounting_Name",
DROP COLUMN "Accounting_Phone";

-- AlterTable
ALTER TABLE "owners" DROP COLUMN "Owner_Email",
DROP COLUMN "Owner_Name",
DROP COLUMN "Owner_Phone";

-- AlterTable
ALTER TABLE "primary_contacts" DROP COLUMN "Primary_Email",
DROP COLUMN "Primary_Name",
DROP COLUMN "Primary_Phone";
