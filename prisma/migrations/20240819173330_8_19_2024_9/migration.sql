/*
  Warnings:

  - A unique constraint covering the columns `[Email]` on the table `Person` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Person_Email_key" ON "Person"("Email");
