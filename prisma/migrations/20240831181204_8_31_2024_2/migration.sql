/*
  Warnings:

  - You are about to drop the `time_entries` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "time_entries" DROP CONSTRAINT "time_entries_Time_Entry_ID_fkey";

-- DropTable
DROP TABLE "time_entries";

-- CreateTable
CREATE TABLE "Time_Entry" (
    "Time_Entry_ID" SERIAL NOT NULL,
    "Description" TEXT,
    "Project_ID" INTEGER NOT NULL,
    "Task_ID" INTEGER,
    "Subtask_ID" INTEGER,
    "Person_ID" INTEGER NOT NULL,
    "Person_Name" TEXT,
    "Start_Date_Time" TIMESTAMP(3),
    "End_Date_Time" TIMESTAMP(3),
    "Minutes" INTEGER,
    "Day_Of_Week_Date" TIMESTAMP(3),
    "Day_Of_Week_Name" TEXT,
    "Cookie_ID" INTEGER,
    "Total_Hours" DOUBLE PRECISION,
    "Billing_Type" TEXT,
    "Billing_Status" TEXT,
    "Hourly_Billing_Rate" DOUBLE PRECISION,
    "Total_to_Bill" DOUBLE PRECISION,
    "Internal_Notes" TEXT,
    "Created_By" INTEGER,
    "Updated_Date" TIMESTAMP(3),
    "Updated_By" INTEGER,

    CONSTRAINT "Time_Entry_pkey" PRIMARY KEY ("Time_Entry_ID")
);

-- AddForeignKey
ALTER TABLE "Time_Entry" ADD CONSTRAINT "Time_Entry_Time_Entry_ID_fkey" FOREIGN KEY ("Time_Entry_ID") REFERENCES "Task"("Task_ID") ON DELETE RESTRICT ON UPDATE CASCADE;
