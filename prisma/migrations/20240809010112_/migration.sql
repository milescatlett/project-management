/*
  Warnings:

  - You are about to drop the column `Accounting_Email` on the `Person` table. All the data in the column will be lost.
  - You are about to drop the column `Accounting_Name` on the `Person` table. All the data in the column will be lost.
  - You are about to drop the column `Accounting_Phone` on the `Person` table. All the data in the column will be lost.
  - You are about to drop the column `EIN` on the `Person` table. All the data in the column will be lost.
  - You are about to drop the column `Organization_Name` on the `Person` table. All the data in the column will be lost.
  - You are about to drop the column `Organization_Type` on the `Person` table. All the data in the column will be lost.
  - You are about to drop the column `Owner_Email` on the `Person` table. All the data in the column will be lost.
  - You are about to drop the column `Owner_Name` on the `Person` table. All the data in the column will be lost.
  - You are about to drop the column `Owner_Phone` on the `Person` table. All the data in the column will be lost.
  - You are about to drop the column `Primary_Email` on the `Person` table. All the data in the column will be lost.
  - You are about to drop the column `Primary_Name` on the `Person` table. All the data in the column will be lost.
  - You are about to drop the column `Primary_Phone` on the `Person` table. All the data in the column will be lost.
  - You are about to drop the column `State_Tax_ID` on the `Person` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[Owner_ID]` on the table `Person` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[Primary_Contact_ID]` on the table `Person` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[Accounting_ID]` on the table `Person` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[Created_By]` on the table `Person` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[Updated_By]` on the table `Person` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Person" DROP COLUMN "Accounting_Email",
DROP COLUMN "Accounting_Name",
DROP COLUMN "Accounting_Phone",
DROP COLUMN "EIN",
DROP COLUMN "Organization_Name",
DROP COLUMN "Organization_Type",
DROP COLUMN "Owner_Email",
DROP COLUMN "Owner_Name",
DROP COLUMN "Owner_Phone",
DROP COLUMN "Primary_Email",
DROP COLUMN "Primary_Name",
DROP COLUMN "Primary_Phone",
DROP COLUMN "State_Tax_ID",
ADD COLUMN     "Person_ID" SERIAL NOT NULL,
ADD CONSTRAINT "Person_pkey" PRIMARY KEY ("Person_ID");

-- CreateTable
CREATE TABLE "Client" (
    "Client_ID" SERIAL NOT NULL,
    "Status" TEXT NOT NULL,
    "Client_Name" TEXT NOT NULL,
    "Client_Type" TEXT NOT NULL,
    "Website_URL" TEXT NOT NULL,
    "Logo_URL" TEXT NOT NULL,
    "Address1_Mailing" TEXT NOT NULL,
    "Address2_Mailing" TEXT NOT NULL,
    "City_Mailing" TEXT NOT NULL,
    "State_Mailing" TEXT NOT NULL,
    "Zip_Mailing" TEXT NOT NULL,
    "Address1_Physical" TEXT NOT NULL,
    "Address2_Physical" TEXT NOT NULL,
    "City_Physical" TEXT NOT NULL,
    "State_Physical" TEXT NOT NULL,
    "Zip_Physical" TEXT NOT NULL,
    "Company_Profile" TEXT NOT NULL,
    "Internal_Notes" TEXT NOT NULL,
    "Owner_ID" INTEGER NOT NULL,
    "Primary_Contact_ID" INTEGER NOT NULL,
    "Accounting_ID" INTEGER NOT NULL,
    "Number_of_Employees" INTEGER NOT NULL,
    "Organization_ID" INTEGER NOT NULL,
    "Number_of_Contractors" INTEGER NOT NULL,
    "Created_Date" TIMESTAMP(3) NOT NULL,
    "Created_By" INTEGER NOT NULL,
    "Updated_Date" TIMESTAMP(3) NOT NULL,
    "Updated_By" INTEGER NOT NULL,
    "Person_ID" INTEGER NOT NULL,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("Client_ID")
);

-- CreateTable
CREATE TABLE "owners" (
    "Owner_ID" SERIAL NOT NULL,
    "Owner_Name" TEXT NOT NULL,
    "Owner_Email" TEXT NOT NULL,
    "Owner_Phone" TEXT NOT NULL,
    "Created_Date" TIMESTAMP(3) NOT NULL,
    "Created_By" INTEGER NOT NULL,
    "Updated_Date" TIMESTAMP(3) NOT NULL,
    "Updated_By" INTEGER NOT NULL,
    "Person_ID" INTEGER NOT NULL,
    "Client_ID" INTEGER NOT NULL,

    CONSTRAINT "owners_pkey" PRIMARY KEY ("Owner_ID")
);

-- CreateTable
CREATE TABLE "primary_contacts" (
    "Primary_Contact_ID" SERIAL NOT NULL,
    "Primary_Name" TEXT NOT NULL,
    "Primary_Email" TEXT NOT NULL,
    "Primary_Phone" TEXT NOT NULL,
    "Created_Date" TIMESTAMP(3) NOT NULL,
    "Created_By" INTEGER NOT NULL,
    "Updated_Date" TIMESTAMP(3) NOT NULL,
    "Updated_By" INTEGER NOT NULL,
    "Person_ID" INTEGER NOT NULL,
    "Client_ID" INTEGER NOT NULL,

    CONSTRAINT "primary_contacts_pkey" PRIMARY KEY ("Primary_Contact_ID")
);

-- CreateTable
CREATE TABLE "accounting" (
    "Accounting_ID" SERIAL NOT NULL,
    "Accounting_Name" TEXT NOT NULL,
    "Accounting_Email" TEXT NOT NULL,
    "Accounting_Phone" TEXT NOT NULL,
    "Created_Date" TIMESTAMP(3) NOT NULL,
    "Created_By" INTEGER NOT NULL,
    "Updated_Date" TIMESTAMP(3) NOT NULL,
    "Updated_By" INTEGER NOT NULL,
    "EIN" TEXT NOT NULL,
    "State_Tax_ID" TEXT NOT NULL,
    "Person_ID" INTEGER NOT NULL,
    "Client_ID" INTEGER NOT NULL,

    CONSTRAINT "accounting_pkey" PRIMARY KEY ("Accounting_ID")
);

-- CreateTable
CREATE TABLE "organizations" (
    "Organization_ID" SERIAL NOT NULL,
    "Organization_Name" TEXT NOT NULL,
    "Organization_Type" TEXT NOT NULL,
    "Created_Date" TIMESTAMP(3) NOT NULL,
    "Created_By" INTEGER NOT NULL,
    "Updated_Date" TIMESTAMP(3) NOT NULL,
    "Updated_By" INTEGER NOT NULL,
    "Person_ID" INTEGER NOT NULL,
    "Client_ID" INTEGER NOT NULL,

    CONSTRAINT "organizations_pkey" PRIMARY KEY ("Organization_ID")
);

-- CreateTable
CREATE TABLE "projects" (
    "Project_ID" SERIAL NOT NULL,
    "Project_Name" TEXT NOT NULL,
    "Project_Description" TEXT NOT NULL,
    "Project_Status" TEXT NOT NULL,
    "Template_ID" INTEGER NOT NULL,
    "Client_ID" TEXT NOT NULL,
    "Project_Completed_Date" TIMESTAMP(3) NOT NULL,
    "Project_Due_Date" TIMESTAMP(3) NOT NULL,
    "Project_Hours_Completed" DOUBLE PRECISION NOT NULL,
    "Created_Date" TIMESTAMP(3) NOT NULL,
    "Created_By" INTEGER NOT NULL,
    "Updated_Date" TIMESTAMP(3) NOT NULL,
    "Updated_By" INTEGER NOT NULL,
    "Organization_ID" INTEGER NOT NULL,

    CONSTRAINT "projects_pkey" PRIMARY KEY ("Project_ID")
);

-- CreateTable
CREATE TABLE "Project_Comment" (
    "Project_Comment_ID" SERIAL NOT NULL,
    "Project_ID" INTEGER NOT NULL,
    "Comment" TEXT NOT NULL,
    "Created_Date" TIMESTAMP(3) NOT NULL,
    "Created_By" INTEGER NOT NULL,
    "Updated_Date" TIMESTAMP(3) NOT NULL,
    "Updated_By" INTEGER NOT NULL,

    CONSTRAINT "Project_Comment_pkey" PRIMARY KEY ("Project_Comment_ID")
);

-- CreateTable
CREATE TABLE "Task" (
    "Task_ID" SERIAL NOT NULL,
    "Task_Name" TEXT NOT NULL,
    "Task_Description" TEXT NOT NULL,
    "Task_Status_Label" TEXT NOT NULL,
    "Task_Started_Date" TIMESTAMP(3) NOT NULL,
    "Task_Completed_Date" TIMESTAMP(3) NOT NULL,
    "Task_Due_Date" TIMESTAMP(3) NOT NULL,
    "Task_Hours_Completed" DOUBLE PRECISION NOT NULL,
    "Task_Hidden_From_Client" TEXT NOT NULL,
    "Task_Priority" TEXT NOT NULL,
    "Person_Assigned_To_ID" INTEGER NOT NULL,
    "Task_Assigned_To_Name" TEXT NOT NULL,
    "Created_Date" TIMESTAMP(3) NOT NULL,
    "Created_By" INTEGER NOT NULL,
    "Updated_Date" TIMESTAMP(3) NOT NULL,
    "Updated_By" INTEGER NOT NULL,

    CONSTRAINT "Task_pkey" PRIMARY KEY ("Task_ID")
);

-- CreateTable
CREATE TABLE "Task_Comment" (
    "Task_Comment_ID" SERIAL NOT NULL,
    "Task_ID" INTEGER NOT NULL,
    "Comment" TEXT NOT NULL,
    "Created_Date" TIMESTAMP(3) NOT NULL,
    "Created_By" INTEGER NOT NULL,
    "Updated_Date" TIMESTAMP(3) NOT NULL,
    "Updated_By" INTEGER NOT NULL,

    CONSTRAINT "Task_Comment_pkey" PRIMARY KEY ("Task_Comment_ID")
);

-- CreateTable
CREATE TABLE "subtasks" (
    "Subtask_ID" SERIAL NOT NULL,
    "Subtask_Name" TEXT NOT NULL,
    "Subtask_Description" TEXT NOT NULL,
    "Subtask_Status_Label" TEXT NOT NULL,
    "Subtask_Started_Date" TIMESTAMP(3) NOT NULL,
    "Subtask_Completed_Date" TIMESTAMP(3) NOT NULL,
    "Subtask_Due_Date" TIMESTAMP(3) NOT NULL,
    "Subtask_Hours_Completed" DOUBLE PRECISION NOT NULL,
    "Subtask_Hidden_From_Client" BOOLEAN NOT NULL,
    "Subtask_Priority" TEXT NOT NULL,
    "Person_Assigned_To_ID" INTEGER NOT NULL,
    "Person_Assigned_To_Name" TEXT NOT NULL,
    "Created_Date" TIMESTAMP(3) NOT NULL,
    "Created_By" INTEGER NOT NULL,
    "Updated_Date" TIMESTAMP(3) NOT NULL,
    "Updated_By" INTEGER NOT NULL,

    CONSTRAINT "subtasks_pkey" PRIMARY KEY ("Subtask_ID")
);

-- CreateTable
CREATE TABLE "Subtask_Comment" (
    "Subtask_Comment_ID" SERIAL NOT NULL,
    "Subtask_ID" INTEGER NOT NULL,
    "Comment" TEXT NOT NULL,
    "Created_Date" TIMESTAMP(3) NOT NULL,
    "Created_By" INTEGER NOT NULL,
    "Updated_Date" TIMESTAMP(3) NOT NULL,
    "Updated_By" INTEGER NOT NULL,

    CONSTRAINT "Subtask_Comment_pkey" PRIMARY KEY ("Subtask_Comment_ID")
);

-- CreateTable
CREATE TABLE "time_entries" (
    "Time_Entry_ID" SERIAL NOT NULL,
    "Description" TEXT NOT NULL,
    "Project_ID" INTEGER NOT NULL,
    "Task_ID" INTEGER NOT NULL,
    "Subtask_ID" INTEGER NOT NULL,
    "Person_ID" INTEGER NOT NULL,
    "Person_Name" TEXT NOT NULL,
    "Start_Date_Time" TIMESTAMP(3) NOT NULL,
    "End_Date_Time" TIMESTAMP(3) NOT NULL,
    "Minutes" INTEGER NOT NULL,
    "Day_Of_Week_Date" TIMESTAMP(3) NOT NULL,
    "Day_Of_Week_Name" TEXT NOT NULL,
    "Cookie_ID" INTEGER NOT NULL,
    "Total_Hours" DOUBLE PRECISION NOT NULL,
    "Billing_Type" TEXT NOT NULL,
    "Billing_Status" TEXT NOT NULL,
    "Hourly_Billing_Rate" DOUBLE PRECISION NOT NULL,
    "Total_to_Bill" DOUBLE PRECISION NOT NULL,
    "Internal_Notes" TEXT NOT NULL,
    "Created_By" INTEGER NOT NULL,
    "Updated_Date" TIMESTAMP(3) NOT NULL,
    "Updated_By" INTEGER NOT NULL,

    CONSTRAINT "time_entries_pkey" PRIMARY KEY ("Time_Entry_ID")
);

-- CreateIndex
CREATE UNIQUE INDEX "Client_Owner_ID_key" ON "Client"("Owner_ID");

-- CreateIndex
CREATE UNIQUE INDEX "Client_Primary_Contact_ID_key" ON "Client"("Primary_Contact_ID");

-- CreateIndex
CREATE UNIQUE INDEX "Client_Accounting_ID_key" ON "Client"("Accounting_ID");

-- CreateIndex
CREATE UNIQUE INDEX "Client_Organization_ID_key" ON "Client"("Organization_ID");

-- CreateIndex
CREATE UNIQUE INDEX "Client_Created_By_key" ON "Client"("Created_By");

-- CreateIndex
CREATE UNIQUE INDEX "Client_Updated_By_key" ON "Client"("Updated_By");

-- CreateIndex
CREATE UNIQUE INDEX "Client_Person_ID_key" ON "Client"("Person_ID");

-- CreateIndex
CREATE UNIQUE INDEX "owners_Created_By_key" ON "owners"("Created_By");

-- CreateIndex
CREATE UNIQUE INDEX "owners_Updated_By_key" ON "owners"("Updated_By");

-- CreateIndex
CREATE UNIQUE INDEX "owners_Person_ID_key" ON "owners"("Person_ID");

-- CreateIndex
CREATE UNIQUE INDEX "owners_Client_ID_key" ON "owners"("Client_ID");

-- CreateIndex
CREATE UNIQUE INDEX "primary_contacts_Created_By_key" ON "primary_contacts"("Created_By");

-- CreateIndex
CREATE UNIQUE INDEX "primary_contacts_Updated_By_key" ON "primary_contacts"("Updated_By");

-- CreateIndex
CREATE UNIQUE INDEX "primary_contacts_Person_ID_key" ON "primary_contacts"("Person_ID");

-- CreateIndex
CREATE UNIQUE INDEX "primary_contacts_Client_ID_key" ON "primary_contacts"("Client_ID");

-- CreateIndex
CREATE UNIQUE INDEX "accounting_Created_By_key" ON "accounting"("Created_By");

-- CreateIndex
CREATE UNIQUE INDEX "accounting_Updated_By_key" ON "accounting"("Updated_By");

-- CreateIndex
CREATE UNIQUE INDEX "accounting_Person_ID_key" ON "accounting"("Person_ID");

-- CreateIndex
CREATE UNIQUE INDEX "accounting_Client_ID_key" ON "accounting"("Client_ID");

-- CreateIndex
CREATE UNIQUE INDEX "organizations_Created_By_key" ON "organizations"("Created_By");

-- CreateIndex
CREATE UNIQUE INDEX "organizations_Updated_By_key" ON "organizations"("Updated_By");

-- CreateIndex
CREATE UNIQUE INDEX "organizations_Person_ID_key" ON "organizations"("Person_ID");

-- CreateIndex
CREATE UNIQUE INDEX "organizations_Client_ID_key" ON "organizations"("Client_ID");

-- CreateIndex
CREATE UNIQUE INDEX "projects_Template_ID_key" ON "projects"("Template_ID");

-- CreateIndex
CREATE UNIQUE INDEX "projects_Created_By_key" ON "projects"("Created_By");

-- CreateIndex
CREATE UNIQUE INDEX "projects_Updated_By_key" ON "projects"("Updated_By");

-- CreateIndex
CREATE UNIQUE INDEX "Project_Comment_Created_By_key" ON "Project_Comment"("Created_By");

-- CreateIndex
CREATE UNIQUE INDEX "Project_Comment_Updated_By_key" ON "Project_Comment"("Updated_By");

-- CreateIndex
CREATE UNIQUE INDEX "Task_Created_By_key" ON "Task"("Created_By");

-- CreateIndex
CREATE UNIQUE INDEX "Task_Updated_By_key" ON "Task"("Updated_By");

-- CreateIndex
CREATE UNIQUE INDEX "Task_Comment_Created_By_key" ON "Task_Comment"("Created_By");

-- CreateIndex
CREATE UNIQUE INDEX "Task_Comment_Updated_By_key" ON "Task_Comment"("Updated_By");

-- CreateIndex
CREATE UNIQUE INDEX "subtasks_Created_By_key" ON "subtasks"("Created_By");

-- CreateIndex
CREATE UNIQUE INDEX "subtasks_Updated_By_key" ON "subtasks"("Updated_By");

-- CreateIndex
CREATE UNIQUE INDEX "Subtask_Comment_Created_By_key" ON "Subtask_Comment"("Created_By");

-- CreateIndex
CREATE UNIQUE INDEX "Subtask_Comment_Updated_By_key" ON "Subtask_Comment"("Updated_By");

-- CreateIndex
CREATE UNIQUE INDEX "time_entries_Project_ID_key" ON "time_entries"("Project_ID");

-- CreateIndex
CREATE UNIQUE INDEX "time_entries_Task_ID_key" ON "time_entries"("Task_ID");

-- CreateIndex
CREATE UNIQUE INDEX "time_entries_Subtask_ID_key" ON "time_entries"("Subtask_ID");

-- CreateIndex
CREATE UNIQUE INDEX "time_entries_Person_ID_key" ON "time_entries"("Person_ID");

-- CreateIndex
CREATE UNIQUE INDEX "time_entries_Created_By_key" ON "time_entries"("Created_By");

-- CreateIndex
CREATE UNIQUE INDEX "time_entries_Updated_By_key" ON "time_entries"("Updated_By");

-- CreateIndex
CREATE UNIQUE INDEX "Person_Owner_ID_key" ON "Person"("Owner_ID");

-- CreateIndex
CREATE UNIQUE INDEX "Person_Primary_Contact_ID_key" ON "Person"("Primary_Contact_ID");

-- CreateIndex
CREATE UNIQUE INDEX "Person_Accounting_ID_key" ON "Person"("Accounting_ID");

-- CreateIndex
CREATE UNIQUE INDEX "Person_Created_By_key" ON "Person"("Created_By");

-- CreateIndex
CREATE UNIQUE INDEX "Person_Updated_By_key" ON "Person"("Updated_By");

-- AddForeignKey
ALTER TABLE "Person" ADD CONSTRAINT "Person_Created_By_fkey" FOREIGN KEY ("Created_By") REFERENCES "Person"("Person_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Person" ADD CONSTRAINT "Person_Updated_By_fkey" FOREIGN KEY ("Updated_By") REFERENCES "Person"("Person_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Client" ADD CONSTRAINT "Client_Client_ID_fkey" FOREIGN KEY ("Client_ID") REFERENCES "Person"("Person_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Client" ADD CONSTRAINT "Client_Created_By_fkey" FOREIGN KEY ("Created_By") REFERENCES "Person"("Person_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Client" ADD CONSTRAINT "Client_Updated_By_fkey" FOREIGN KEY ("Updated_By") REFERENCES "Person"("Person_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "owners" ADD CONSTRAINT "owners_Person_ID_fkey" FOREIGN KEY ("Person_ID") REFERENCES "Person"("Owner_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "owners" ADD CONSTRAINT "owners_Created_By_fkey" FOREIGN KEY ("Created_By") REFERENCES "Person"("Person_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "owners" ADD CONSTRAINT "owners_Updated_By_fkey" FOREIGN KEY ("Updated_By") REFERENCES "Person"("Person_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "owners" ADD CONSTRAINT "owners_Client_ID_fkey" FOREIGN KEY ("Client_ID") REFERENCES "Client"("Owner_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "primary_contacts" ADD CONSTRAINT "primary_contacts_Person_ID_fkey" FOREIGN KEY ("Person_ID") REFERENCES "Person"("Primary_Contact_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "primary_contacts" ADD CONSTRAINT "primary_contacts_Created_By_fkey" FOREIGN KEY ("Created_By") REFERENCES "Person"("Person_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "primary_contacts" ADD CONSTRAINT "primary_contacts_Updated_By_fkey" FOREIGN KEY ("Updated_By") REFERENCES "Person"("Person_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "primary_contacts" ADD CONSTRAINT "primary_contacts_Client_ID_fkey" FOREIGN KEY ("Client_ID") REFERENCES "Client"("Primary_Contact_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "accounting" ADD CONSTRAINT "accounting_Person_ID_fkey" FOREIGN KEY ("Person_ID") REFERENCES "Person"("Accounting_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "accounting" ADD CONSTRAINT "accounting_Created_By_fkey" FOREIGN KEY ("Created_By") REFERENCES "Person"("Person_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "accounting" ADD CONSTRAINT "accounting_Updated_By_fkey" FOREIGN KEY ("Updated_By") REFERENCES "Person"("Person_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "accounting" ADD CONSTRAINT "accounting_Client_ID_fkey" FOREIGN KEY ("Client_ID") REFERENCES "Client"("Accounting_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "organizations" ADD CONSTRAINT "organizations_Created_By_fkey" FOREIGN KEY ("Created_By") REFERENCES "Person"("Person_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "organizations" ADD CONSTRAINT "organizations_Updated_By_fkey" FOREIGN KEY ("Updated_By") REFERENCES "Person"("Person_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "organizations" ADD CONSTRAINT "organizations_Person_ID_fkey" FOREIGN KEY ("Person_ID") REFERENCES "Person"("Organization_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "organizations" ADD CONSTRAINT "organizations_Client_ID_fkey" FOREIGN KEY ("Client_ID") REFERENCES "Client"("Organization_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "projects" ADD CONSTRAINT "projects_Created_By_fkey" FOREIGN KEY ("Created_By") REFERENCES "Person"("Person_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "projects" ADD CONSTRAINT "projects_Updated_By_fkey" FOREIGN KEY ("Updated_By") REFERENCES "Person"("Person_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "projects" ADD CONSTRAINT "projects_Project_ID_fkey" FOREIGN KEY ("Project_ID") REFERENCES "organizations"("Organization_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Project_Comment" ADD CONSTRAINT "Project_Comment_Project_Comment_ID_fkey" FOREIGN KEY ("Project_Comment_ID") REFERENCES "projects"("Project_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Project_Comment" ADD CONSTRAINT "Project_Comment_Created_By_fkey" FOREIGN KEY ("Created_By") REFERENCES "Person"("Person_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Project_Comment" ADD CONSTRAINT "Project_Comment_Updated_By_fkey" FOREIGN KEY ("Updated_By") REFERENCES "Person"("Person_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_Task_ID_fkey" FOREIGN KEY ("Task_ID") REFERENCES "Person"("Person_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_Created_By_fkey" FOREIGN KEY ("Created_By") REFERENCES "Person"("Person_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_Updated_By_fkey" FOREIGN KEY ("Updated_By") REFERENCES "Person"("Person_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Task_Comment" ADD CONSTRAINT "Task_Comment_Task_Comment_ID_fkey" FOREIGN KEY ("Task_Comment_ID") REFERENCES "Task"("Task_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Task_Comment" ADD CONSTRAINT "Task_Comment_Created_By_fkey" FOREIGN KEY ("Created_By") REFERENCES "Person"("Person_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Task_Comment" ADD CONSTRAINT "Task_Comment_Updated_By_fkey" FOREIGN KEY ("Updated_By") REFERENCES "Person"("Person_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "subtasks" ADD CONSTRAINT "subtasks_Subtask_ID_fkey" FOREIGN KEY ("Subtask_ID") REFERENCES "Person"("Person_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "subtasks" ADD CONSTRAINT "subtasks_Created_By_fkey" FOREIGN KEY ("Created_By") REFERENCES "Person"("Person_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "subtasks" ADD CONSTRAINT "subtasks_Updated_By_fkey" FOREIGN KEY ("Updated_By") REFERENCES "Person"("Person_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Subtask_Comment" ADD CONSTRAINT "Subtask_Comment_Subtask_Comment_ID_fkey" FOREIGN KEY ("Subtask_Comment_ID") REFERENCES "subtasks"("Subtask_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Subtask_Comment" ADD CONSTRAINT "Subtask_Comment_Created_By_fkey" FOREIGN KEY ("Created_By") REFERENCES "Person"("Person_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Subtask_Comment" ADD CONSTRAINT "Subtask_Comment_Updated_By_fkey" FOREIGN KEY ("Updated_By") REFERENCES "Person"("Person_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "time_entries" ADD CONSTRAINT "project_time_entry_fkey" FOREIGN KEY ("Time_Entry_ID") REFERENCES "projects"("Project_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "time_entries" ADD CONSTRAINT "task_time_entry_fkey" FOREIGN KEY ("Time_Entry_ID") REFERENCES "Task"("Task_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "time_entries" ADD CONSTRAINT "subtask_time_entry_fkey" FOREIGN KEY ("Time_Entry_ID") REFERENCES "subtasks"("Subtask_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "time_entries" ADD CONSTRAINT "person_time_entry_fkey" FOREIGN KEY ("Time_Entry_ID") REFERENCES "Person"("Person_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "time_entries" ADD CONSTRAINT "time_entries_Created_By_fkey" FOREIGN KEY ("Created_By") REFERENCES "Person"("Person_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "time_entries" ADD CONSTRAINT "time_entries_Updated_By_fkey" FOREIGN KEY ("Updated_By") REFERENCES "Person"("Person_ID") ON DELETE RESTRICT ON UPDATE CASCADE;
