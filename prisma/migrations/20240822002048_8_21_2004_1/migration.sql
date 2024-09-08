-- AlterTable
ALTER TABLE "Project" ALTER COLUMN "Template_ID" DROP NOT NULL,
ALTER COLUMN "Project_Completed_Date" DROP NOT NULL,
ALTER COLUMN "Project_Hours_Completed" DROP NOT NULL,
ALTER COLUMN "Total_Nonbillable" DROP NOT NULL,
ALTER COLUMN "Total_Billable" DROP NOT NULL,
ALTER COLUMN "Organization_ID" DROP NOT NULL;
