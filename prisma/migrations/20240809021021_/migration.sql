/*
  Warnings:

  - A unique constraint covering the columns `[Email]` on the table `Person` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `Email` to the `Person` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Password` to the `Person` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Person" ADD COLUMN     "Email" TEXT NOT NULL,
ADD COLUMN     "Password" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Person_Email_key" ON "Person"("Email");
