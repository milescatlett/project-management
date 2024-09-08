-- DropForeignKey
ALTER TABLE "Client" DROP CONSTRAINT "Client_Created_By_fkey";

-- DropForeignKey
ALTER TABLE "Client" DROP CONSTRAINT "Client_Updated_By_fkey";

-- DropForeignKey
ALTER TABLE "accounting" DROP CONSTRAINT "accounting_Created_By_fkey";

-- DropForeignKey
ALTER TABLE "accounting" DROP CONSTRAINT "accounting_Updated_By_fkey";

-- DropForeignKey
ALTER TABLE "organizations" DROP CONSTRAINT "organizations_Created_By_fkey";

-- DropForeignKey
ALTER TABLE "organizations" DROP CONSTRAINT "organizations_Updated_By_fkey";

-- DropForeignKey
ALTER TABLE "owners" DROP CONSTRAINT "owners_Created_By_fkey";

-- DropForeignKey
ALTER TABLE "owners" DROP CONSTRAINT "owners_Updated_By_fkey";

-- DropForeignKey
ALTER TABLE "primary_contacts" DROP CONSTRAINT "primary_contacts_Created_By_fkey";

-- DropForeignKey
ALTER TABLE "primary_contacts" DROP CONSTRAINT "primary_contacts_Updated_By_fkey";

-- AlterTable
ALTER TABLE "Client" ALTER COLUMN "Created_Date" DROP NOT NULL,
ALTER COLUMN "Created_By" DROP NOT NULL,
ALTER COLUMN "Updated_Date" DROP NOT NULL,
ALTER COLUMN "Updated_By" DROP NOT NULL;

-- AlterTable
ALTER TABLE "accounting" ALTER COLUMN "Created_Date" DROP NOT NULL,
ALTER COLUMN "Created_By" DROP NOT NULL,
ALTER COLUMN "Updated_Date" DROP NOT NULL,
ALTER COLUMN "Updated_By" DROP NOT NULL;

-- AlterTable
ALTER TABLE "organizations" ALTER COLUMN "Created_Date" DROP NOT NULL,
ALTER COLUMN "Created_By" DROP NOT NULL,
ALTER COLUMN "Updated_Date" DROP NOT NULL,
ALTER COLUMN "Updated_By" DROP NOT NULL;

-- AlterTable
ALTER TABLE "owners" ALTER COLUMN "Created_Date" DROP NOT NULL,
ALTER COLUMN "Created_By" DROP NOT NULL,
ALTER COLUMN "Updated_Date" DROP NOT NULL,
ALTER COLUMN "Updated_By" DROP NOT NULL;

-- AlterTable
ALTER TABLE "primary_contacts" ALTER COLUMN "Created_Date" DROP NOT NULL,
ALTER COLUMN "Created_By" DROP NOT NULL,
ALTER COLUMN "Updated_Date" DROP NOT NULL,
ALTER COLUMN "Updated_By" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Client" ADD CONSTRAINT "Client_Created_By_fkey" FOREIGN KEY ("Created_By") REFERENCES "Person"("Person_ID") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Client" ADD CONSTRAINT "Client_Updated_By_fkey" FOREIGN KEY ("Updated_By") REFERENCES "Person"("Person_ID") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "owners" ADD CONSTRAINT "owners_Created_By_fkey" FOREIGN KEY ("Created_By") REFERENCES "Person"("Person_ID") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "owners" ADD CONSTRAINT "owners_Updated_By_fkey" FOREIGN KEY ("Updated_By") REFERENCES "Person"("Person_ID") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "primary_contacts" ADD CONSTRAINT "primary_contacts_Created_By_fkey" FOREIGN KEY ("Created_By") REFERENCES "Person"("Person_ID") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "primary_contacts" ADD CONSTRAINT "primary_contacts_Updated_By_fkey" FOREIGN KEY ("Updated_By") REFERENCES "Person"("Person_ID") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "accounting" ADD CONSTRAINT "accounting_Created_By_fkey" FOREIGN KEY ("Created_By") REFERENCES "Person"("Person_ID") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "accounting" ADD CONSTRAINT "accounting_Updated_By_fkey" FOREIGN KEY ("Updated_By") REFERENCES "Person"("Person_ID") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "organizations" ADD CONSTRAINT "organizations_Created_By_fkey" FOREIGN KEY ("Created_By") REFERENCES "Person"("Person_ID") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "organizations" ADD CONSTRAINT "organizations_Updated_By_fkey" FOREIGN KEY ("Updated_By") REFERENCES "Person"("Person_ID") ON DELETE SET NULL ON UPDATE CASCADE;
