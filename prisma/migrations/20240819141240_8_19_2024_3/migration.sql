-- DropForeignKey
ALTER TABLE "accounting" DROP CONSTRAINT "accounting_Client_ID_fkey";

-- DropForeignKey
ALTER TABLE "accounting" DROP CONSTRAINT "accounting_Person_ID_fkey";

-- DropForeignKey
ALTER TABLE "organizations" DROP CONSTRAINT "organizations_Client_ID_fkey";

-- DropForeignKey
ALTER TABLE "owners" DROP CONSTRAINT "owners_Client_ID_fkey";

-- DropForeignKey
ALTER TABLE "owners" DROP CONSTRAINT "owners_Person_ID_fkey";

-- DropForeignKey
ALTER TABLE "primary_contacts" DROP CONSTRAINT "primary_contacts_Person_ID_fkey";

-- AlterTable
ALTER TABLE "accounting" ALTER COLUMN "Person_ID" DROP NOT NULL,
ALTER COLUMN "Client_ID" DROP NOT NULL;

-- AlterTable
ALTER TABLE "organizations" ALTER COLUMN "Client_ID" DROP NOT NULL;

-- AlterTable
ALTER TABLE "owners" ALTER COLUMN "Person_ID" DROP NOT NULL,
ALTER COLUMN "Client_ID" DROP NOT NULL;

-- AlterTable
ALTER TABLE "primary_contacts" ALTER COLUMN "Person_ID" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "owners" ADD CONSTRAINT "owners_Person_ID_fkey" FOREIGN KEY ("Person_ID") REFERENCES "Person"("Owner_ID") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "owners" ADD CONSTRAINT "owners_Client_ID_fkey" FOREIGN KEY ("Client_ID") REFERENCES "Client"("Owner_ID") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "primary_contacts" ADD CONSTRAINT "primary_contacts_Person_ID_fkey" FOREIGN KEY ("Person_ID") REFERENCES "Person"("Primary_Contact_ID") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "accounting" ADD CONSTRAINT "accounting_Person_ID_fkey" FOREIGN KEY ("Person_ID") REFERENCES "Person"("Accounting_ID") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "accounting" ADD CONSTRAINT "accounting_Client_ID_fkey" FOREIGN KEY ("Client_ID") REFERENCES "Client"("Accounting_ID") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "organizations" ADD CONSTRAINT "organizations_Client_ID_fkey" FOREIGN KEY ("Client_ID") REFERENCES "Client"("Organization_ID") ON DELETE SET NULL ON UPDATE CASCADE;
