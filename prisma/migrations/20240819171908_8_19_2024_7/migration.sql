-- DropForeignKey
ALTER TABLE "organizations" DROP CONSTRAINT "organizations_Created_By_fkey";

-- DropForeignKey
ALTER TABLE "organizations" DROP CONSTRAINT "organizations_Updated_By_fkey";

-- DropIndex
DROP INDEX "organizations_Created_By_key";

-- DropIndex
DROP INDEX "organizations_Person_ID_key";

-- DropIndex
DROP INDEX "organizations_Updated_By_key";
