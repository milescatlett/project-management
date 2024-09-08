/*
  Warnings:

  - Changed the type of `Client_ID` on the `Project` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Project" DROP COLUMN "Client_ID",
ADD COLUMN     "Client_ID" INTEGER NOT NULL;
