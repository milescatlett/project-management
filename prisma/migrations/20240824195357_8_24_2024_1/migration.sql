-- AlterTable
ALTER TABLE "time_entries" ALTER COLUMN "Description" DROP NOT NULL,
ALTER COLUMN "Subtask_ID" DROP NOT NULL,
ALTER COLUMN "Person_Name" DROP NOT NULL,
ALTER COLUMN "End_Date_Time" DROP NOT NULL,
ALTER COLUMN "Minutes" DROP NOT NULL,
ALTER COLUMN "Day_Of_Week_Date" DROP NOT NULL,
ALTER COLUMN "Day_Of_Week_Name" DROP NOT NULL,
ALTER COLUMN "Cookie_ID" DROP NOT NULL,
ALTER COLUMN "Total_Hours" DROP NOT NULL,
ALTER COLUMN "Billing_Type" DROP NOT NULL,
ALTER COLUMN "Billing_Status" DROP NOT NULL,
ALTER COLUMN "Hourly_Billing_Rate" DROP NOT NULL,
ALTER COLUMN "Total_to_Bill" DROP NOT NULL,
ALTER COLUMN "Internal_Notes" DROP NOT NULL,
ALTER COLUMN "Created_By" DROP NOT NULL,
ALTER COLUMN "Updated_Date" DROP NOT NULL,
ALTER COLUMN "Updated_By" DROP NOT NULL;
