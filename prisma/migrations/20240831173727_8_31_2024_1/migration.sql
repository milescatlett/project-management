-- AddForeignKey
ALTER TABLE "time_entries" ADD CONSTRAINT "time_entries_Time_Entry_ID_fkey" FOREIGN KEY ("Time_Entry_ID") REFERENCES "Task"("Task_ID") ON DELETE RESTRICT ON UPDATE CASCADE;
