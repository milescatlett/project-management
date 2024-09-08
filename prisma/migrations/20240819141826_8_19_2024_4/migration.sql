-- DropForeignKey
ALTER TABLE "organizations" DROP CONSTRAINT "organizations_Person_ID_fkey";

-- AlterTable
ALTER TABLE "Client" ALTER COLUMN "Person_ID" DROP NOT NULL;

-- AlterTable
ALTER TABLE "organizations" ALTER COLUMN "Person_ID" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "organizations" ADD CONSTRAINT "organizations_Person_ID_fkey" FOREIGN KEY ("Person_ID") REFERENCES "Person"("Organization_ID") ON DELETE SET NULL ON UPDATE CASCADE;
