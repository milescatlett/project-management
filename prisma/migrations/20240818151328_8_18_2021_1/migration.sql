-- DropForeignKey
ALTER TABLE "organizations" DROP CONSTRAINT "organizations_Client_ID_fkey";

-- DropForeignKey
ALTER TABLE "organizations" DROP CONSTRAINT "organizations_Person_ID_fkey";

-- AddForeignKey
ALTER TABLE "Person" ADD CONSTRAINT "organization_person_fkey" FOREIGN KEY ("Person_ID") REFERENCES "organizations"("Organization_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Client" ADD CONSTRAINT "organization_client_fkey" FOREIGN KEY ("Client_ID") REFERENCES "organizations"("Organization_ID") ON DELETE RESTRICT ON UPDATE CASCADE;
