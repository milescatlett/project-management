/*
  Warnings:

  - Added the required column `Project_ID` to the `Task` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Task" ADD COLUMN     "Project_ID" INTEGER NOT NULL;
