-- DropForeignKey
ALTER TABLE "Time_Entry" DROP CONSTRAINT "Time_Entry_Time_Entry_ID_fkey";

-- AddForeignKey
ALTER TABLE "Time_Entry" ADD CONSTRAINT "Time_Entry_Task_ID_fkey" FOREIGN KEY ("Task_ID") REFERENCES "Task"("Task_ID") ON DELETE RESTRICT ON UPDATE CASCADE;
