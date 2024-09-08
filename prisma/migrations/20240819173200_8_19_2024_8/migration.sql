/*
  Warnings:

  - You are about to drop the `accounting` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `organizations` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `owners` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `primary_contacts` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `projects` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `subtasks` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Client" DROP CONSTRAINT "Client_Created_By_fkey";

-- DropForeignKey
ALTER TABLE "Client" DROP CONSTRAINT "Client_Updated_By_fkey";

-- DropForeignKey
ALTER TABLE "Invoice" DROP CONSTRAINT "Invoice_Invoice_ID_fkey";

-- DropForeignKey
ALTER TABLE "Invoice" DROP CONSTRAINT "organization_invoice_fkey";

-- DropForeignKey
ALTER TABLE "Person" DROP CONSTRAINT "Person_Created_By_fkey";

-- DropForeignKey
ALTER TABLE "Person" DROP CONSTRAINT "Person_Updated_By_fkey";

-- DropForeignKey
ALTER TABLE "Project_Comment" DROP CONSTRAINT "Project_Comment_Created_By_fkey";

-- DropForeignKey
ALTER TABLE "Project_Comment" DROP CONSTRAINT "Project_Comment_Project_Comment_ID_fkey";

-- DropForeignKey
ALTER TABLE "Project_Comment" DROP CONSTRAINT "Project_Comment_Updated_By_fkey";

-- DropForeignKey
ALTER TABLE "Subtask_Comment" DROP CONSTRAINT "Subtask_Comment_Created_By_fkey";

-- DropForeignKey
ALTER TABLE "Subtask_Comment" DROP CONSTRAINT "Subtask_Comment_Subtask_Comment_ID_fkey";

-- DropForeignKey
ALTER TABLE "Subtask_Comment" DROP CONSTRAINT "Subtask_Comment_Updated_By_fkey";

-- DropForeignKey
ALTER TABLE "Task" DROP CONSTRAINT "Task_Created_By_fkey";

-- DropForeignKey
ALTER TABLE "Task" DROP CONSTRAINT "Task_Task_ID_fkey";

-- DropForeignKey
ALTER TABLE "Task" DROP CONSTRAINT "Task_Updated_By_fkey";

-- DropForeignKey
ALTER TABLE "Task_Comment" DROP CONSTRAINT "Task_Comment_Created_By_fkey";

-- DropForeignKey
ALTER TABLE "Task_Comment" DROP CONSTRAINT "Task_Comment_Task_Comment_ID_fkey";

-- DropForeignKey
ALTER TABLE "Task_Comment" DROP CONSTRAINT "Task_Comment_Updated_By_fkey";

-- DropForeignKey
ALTER TABLE "accounting" DROP CONSTRAINT "accounting_Client_ID_fkey";

-- DropForeignKey
ALTER TABLE "accounting" DROP CONSTRAINT "accounting_Created_By_fkey";

-- DropForeignKey
ALTER TABLE "accounting" DROP CONSTRAINT "accounting_Updated_By_fkey";

-- DropForeignKey
ALTER TABLE "organizations" DROP CONSTRAINT "organizations_Client_ID_fkey";

-- DropForeignKey
ALTER TABLE "owners" DROP CONSTRAINT "owners_Client_ID_fkey";

-- DropForeignKey
ALTER TABLE "owners" DROP CONSTRAINT "owners_Created_By_fkey";

-- DropForeignKey
ALTER TABLE "owners" DROP CONSTRAINT "owners_Updated_By_fkey";

-- DropForeignKey
ALTER TABLE "primary_contacts" DROP CONSTRAINT "primary_contacts_Client_ID_fkey";

-- DropForeignKey
ALTER TABLE "primary_contacts" DROP CONSTRAINT "primary_contacts_Created_By_fkey";

-- DropForeignKey
ALTER TABLE "primary_contacts" DROP CONSTRAINT "primary_contacts_Updated_By_fkey";

-- DropForeignKey
ALTER TABLE "projects" DROP CONSTRAINT "projects_Created_By_fkey";

-- DropForeignKey
ALTER TABLE "projects" DROP CONSTRAINT "projects_Project_ID_fkey";

-- DropForeignKey
ALTER TABLE "projects" DROP CONSTRAINT "projects_Updated_By_fkey";

-- DropForeignKey
ALTER TABLE "subtasks" DROP CONSTRAINT "subtasks_Created_By_fkey";

-- DropForeignKey
ALTER TABLE "subtasks" DROP CONSTRAINT "subtasks_Subtask_ID_fkey";

-- DropForeignKey
ALTER TABLE "subtasks" DROP CONSTRAINT "subtasks_Updated_By_fkey";

-- DropForeignKey
ALTER TABLE "time_entries" DROP CONSTRAINT "person_time_entry_fkey";

-- DropForeignKey
ALTER TABLE "time_entries" DROP CONSTRAINT "project_time_entry_fkey";

-- DropForeignKey
ALTER TABLE "time_entries" DROP CONSTRAINT "subtask_time_entry_fkey";

-- DropForeignKey
ALTER TABLE "time_entries" DROP CONSTRAINT "task_time_entry_fkey";

-- DropForeignKey
ALTER TABLE "time_entries" DROP CONSTRAINT "time_entries_Created_By_fkey";

-- DropForeignKey
ALTER TABLE "time_entries" DROP CONSTRAINT "time_entries_Updated_By_fkey";

-- DropIndex
DROP INDEX "Client_Accounting_ID_key";

-- DropIndex
DROP INDEX "Client_Created_By_key";

-- DropIndex
DROP INDEX "Client_Organization_ID_key";

-- DropIndex
DROP INDEX "Client_Owner_ID_key";

-- DropIndex
DROP INDEX "Client_Person_ID_key";

-- DropIndex
DROP INDEX "Client_Primary_Contact_ID_key";

-- DropIndex
DROP INDEX "Client_Updated_By_key";

-- DropIndex
DROP INDEX "Invoice_Client_ID_key";

-- DropIndex
DROP INDEX "Invoice_Organization_ID_key";

-- DropIndex
DROP INDEX "Person_Accounting_ID_key";

-- DropIndex
DROP INDEX "Person_Client_ID_key";

-- DropIndex
DROP INDEX "Person_Created_By_key";

-- DropIndex
DROP INDEX "Person_Email_key";

-- DropIndex
DROP INDEX "Person_Organization_ID_key";

-- DropIndex
DROP INDEX "Person_Owner_ID_key";

-- DropIndex
DROP INDEX "Person_Primary_Contact_ID_key";

-- DropIndex
DROP INDEX "Person_Updated_By_key";

-- DropIndex
DROP INDEX "Project_Comment_Created_By_key";

-- DropIndex
DROP INDEX "Project_Comment_Updated_By_key";

-- DropIndex
DROP INDEX "Subtask_Comment_Created_By_key";

-- DropIndex
DROP INDEX "Subtask_Comment_Updated_By_key";

-- DropIndex
DROP INDEX "Task_Created_By_key";

-- DropIndex
DROP INDEX "Task_Updated_By_key";

-- DropIndex
DROP INDEX "Task_Comment_Created_By_key";

-- DropIndex
DROP INDEX "Task_Comment_Updated_By_key";

-- DropIndex
DROP INDEX "time_entries_Created_By_key";

-- DropIndex
DROP INDEX "time_entries_Person_ID_key";

-- DropIndex
DROP INDEX "time_entries_Project_ID_key";

-- DropIndex
DROP INDEX "time_entries_Subtask_ID_key";

-- DropIndex
DROP INDEX "time_entries_Task_ID_key";

-- DropIndex
DROP INDEX "time_entries_Updated_By_key";

-- DropTable
DROP TABLE "accounting";

-- DropTable
DROP TABLE "organizations";

-- DropTable
DROP TABLE "owners";

-- DropTable
DROP TABLE "primary_contacts";

-- DropTable
DROP TABLE "projects";

-- DropTable
DROP TABLE "subtasks";

-- CreateTable
CREATE TABLE "Owner" (
    "Owner_ID" SERIAL NOT NULL,
    "Owner_Name" TEXT NOT NULL,
    "Created_Date" TIMESTAMP(3),
    "Created_By" INTEGER,
    "Updated_Date" TIMESTAMP(3),
    "Updated_By" INTEGER,
    "Person_ID" INTEGER,
    "Client_ID" INTEGER,

    CONSTRAINT "Owner_pkey" PRIMARY KEY ("Owner_ID")
);

-- CreateTable
CREATE TABLE "Primary_Contact" (
    "Primary_Contact_ID" SERIAL NOT NULL,
    "Primary_Contact_Name" TEXT NOT NULL,
    "Created_Date" TIMESTAMP(3),
    "Created_By" INTEGER,
    "Updated_Date" TIMESTAMP(3),
    "Updated_By" INTEGER,
    "Person_ID" INTEGER,
    "Client_ID" INTEGER NOT NULL,

    CONSTRAINT "Primary_Contact_pkey" PRIMARY KEY ("Primary_Contact_ID")
);

-- CreateTable
CREATE TABLE "Accounting" (
    "Accounting_ID" SERIAL NOT NULL,
    "Accounting_Name" TEXT NOT NULL,
    "Created_Date" TIMESTAMP(3),
    "Created_By" INTEGER,
    "Updated_Date" TIMESTAMP(3),
    "Updated_By" INTEGER,
    "EIN" TEXT NOT NULL,
    "State_Tax_ID" TEXT NOT NULL,
    "Person_ID" INTEGER,
    "Client_ID" INTEGER,

    CONSTRAINT "Accounting_pkey" PRIMARY KEY ("Accounting_ID")
);

-- CreateTable
CREATE TABLE "Organization" (
    "Organization_ID" SERIAL NOT NULL,
    "Organization_Name" TEXT NOT NULL,
    "Organization_Type" TEXT NOT NULL,
    "Created_Date" TIMESTAMP(3),
    "Created_By" INTEGER,
    "Updated_Date" TIMESTAMP(3),
    "Updated_By" INTEGER,
    "Person_ID" INTEGER,
    "Client_ID" INTEGER,

    CONSTRAINT "Organization_pkey" PRIMARY KEY ("Organization_ID")
);

-- CreateTable
CREATE TABLE "Project" (
    "Project_ID" SERIAL NOT NULL,
    "Project_Name" TEXT NOT NULL,
    "Project_Description" TEXT NOT NULL,
    "Project_Status" TEXT NOT NULL,
    "Template_ID" INTEGER NOT NULL,
    "Client_ID" TEXT NOT NULL,
    "Project_Completed_Date" TIMESTAMP(3) NOT NULL,
    "Project_Due_Date" TIMESTAMP(3) NOT NULL,
    "Project_Hours_Completed" DOUBLE PRECISION NOT NULL,
    "Total_Nonbillable" DOUBLE PRECISION NOT NULL,
    "Total_Billable" DOUBLE PRECISION NOT NULL,
    "Created_Date" TIMESTAMP(3) NOT NULL,
    "Created_By" INTEGER NOT NULL,
    "Updated_Date" TIMESTAMP(3) NOT NULL,
    "Updated_By" INTEGER NOT NULL,
    "Organization_ID" INTEGER NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("Project_ID")
);

-- CreateTable
CREATE TABLE "Subtask" (
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
    "Total_Nonbillable" DOUBLE PRECISION NOT NULL,
    "Total_Billable" DOUBLE PRECISION NOT NULL,
    "Person_Assigned_To_ID" INTEGER NOT NULL,
    "Person_Assigned_To_Name" TEXT NOT NULL,
    "Created_Date" TIMESTAMP(3) NOT NULL,
    "Created_By" INTEGER NOT NULL,
    "Updated_Date" TIMESTAMP(3) NOT NULL,
    "Updated_By" INTEGER NOT NULL,

    CONSTRAINT "Subtask_pkey" PRIMARY KEY ("Subtask_ID")
);
