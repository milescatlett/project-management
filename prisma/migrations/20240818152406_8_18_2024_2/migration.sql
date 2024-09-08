/*
  Warnings:

  - A unique constraint covering the columns `[OrgPerson_ID]` on the table `organizations` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `OrgPerson_ID` to the `organizations` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "organizations" ADD COLUMN     "OrgPerson_ID" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "organizations_OrgPerson_ID_key" ON "organizations"("OrgPerson_ID");
