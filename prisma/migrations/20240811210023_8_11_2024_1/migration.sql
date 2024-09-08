/*
  Warnings:

  - Added the required column `First_Name` to the `Person` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Last_Name` to the `Person` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Person" ADD COLUMN     "First_Name" TEXT NOT NULL,
ADD COLUMN     "Last_Name" TEXT NOT NULL;
