-- DropForeignKey
ALTER TABLE "Client" DROP CONSTRAINT "Client_Client_ID_fkey";

-- DropForeignKey
ALTER TABLE "accounting" DROP CONSTRAINT "accounting_Person_ID_fkey";

-- DropForeignKey
ALTER TABLE "owners" DROP CONSTRAINT "owners_Person_ID_fkey";

-- DropForeignKey
ALTER TABLE "primary_contacts" DROP CONSTRAINT "primary_contacts_Person_ID_fkey";
