/*
  Warnings:

  - Made the column `Task_ID` on table `Time_Entry` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Time_Entry" ALTER COLUMN "Task_ID" SET NOT NULL;
