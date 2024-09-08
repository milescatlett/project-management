import React from 'react';
import { PrismaClient } from '@prisma/client';
import { revalidatePath } from 'next/cache';
import ProjectCreateDetails from './ProjectCreateDetails';

const prisma = new PrismaClient()

const handleSubmit = async (formData) => {
    "use server"

    const projectDescription = formData.get("projectDescription")
    const projectDueDate = new Date(formData.get("projectDueDate"))
    const projectName = formData.get("projectName")
    const projectStatus = formData.get("projectStatus")

    console.log(projectDueDate)

    await prisma.project.create({
        data: {
            Project_Description: projectDescription,
            Project_Due_Date: projectDueDate,
            Project_Name: projectName,
            Project_Status: projectStatus,
            Client_ID: 1,
        }
    })
    revalidatePath("/project/add", "page")    

}

export default function ProjectCreate() {
    return (
        <ProjectCreateDetails
            handleSubmit={handleSubmit}
        />
    )
}