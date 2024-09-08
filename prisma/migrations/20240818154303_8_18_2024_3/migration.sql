/*
  Warnings:

  - You are about to drop the column `OrgPerson_ID` on the `organizations` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Client" DROP CONSTRAINT "organization_client_fkey";

-- DropForeignKey
ALTER TABLE "Person" DROP CONSTRAINT "organization_person_fkey";

-- DropIndex
DROP INDEX "organizations_OrgPerson_ID_key";

-- AlterTable
ALTER TABLE "organizations" DROP COLUMN "OrgPerson_ID";

-- AddForeignKey
ALTER TABLE "organizations" ADD CONSTRAINT "organizations_Person_ID_fkey" FOREIGN KEY ("Person_ID") REFERENCES "Person"("Organization_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "organizations" ADD CONSTRAINT "organizations_Client_ID_fkey" FOREIGN KEY ("Client_ID") REFERENCES "Client"("Organization_ID") ON DELETE RESTRICT ON UPDATE CASCADE;
