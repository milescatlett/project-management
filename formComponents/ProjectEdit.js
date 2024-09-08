import React, { Fragment } from 'react';
import { PrismaClient } from '@prisma/client';
import TaskList from './TaskList';
import { revalidatePath } from 'next/cache';

const prisma = new PrismaClient()

const getOptions = async (projectID) => {
    "use server"
    
    const project = await prisma.project.findUnique({
        where: {
            Project_ID: parseInt(projectID)
        }
    })
    return project
} 

const getTasks = async (projectID) => {
    "use server"

    const tasks = await prisma.task.findMany({
        where: {
            Project_ID: parseInt(projectID)
        }
    })
    return tasks
}

const handleUpdate = async (formData)=> {
    "use server"
    
    const taskID = parseInt(formData.get("taskID"))
    const taskName = formData.get("taskName")
    const taskDescription = formData.get("taskDescription")
    const taskStatusLabel = formData.get("taskStatusLabel")
    const taskDueDate = new Date(formData.get("taskDueDate"))

    await prisma.task.update({
        where: {
            Task_ID: taskID,
        },
        data: {
            Task_Name: taskName,
            Task_Description: taskDescription,
            Task_Status_Label: taskStatusLabel,
            Task_Due_Date: taskDueDate,
        }
    })
    revalidatePath("/projects")
}

const startEndTime = async (formData)=> {
    "use server" 

    const projectID = parseInt(formData.get("projectID"))
    const taskID = parseInt(formData.get("taskID"))
    const minutes = parseInt(formData.get("minutes")) ? parseInt(formData.get("minutes")) : 1

    const prevTimeEntry = await prisma.time_Entry.findFirst({
        where: {
            Task_ID: taskID,
            End_Date_Time: null,
        }
    })
    if (prevTimeEntry?.Start_Date_Time) {
        await prisma.time_Entry.updateMany({
            where: {
                Task_ID: taskID,
                End_Date_Time: null,
            },
            data: {
                Minutes: minutes,
                Start_Date_Time: null,
            }
        })
    }
    if (!prevTimeEntry?.Start_Date_Time) {
        await prisma.time_Entry.updateMany({
            where: {
                Task_ID: taskID,
                Start_Date_Time: null,
                End_Date_Time: null,
            },
            data: {
                Start_Date_Time: new Date(),
            }
        })
    }
    if (!prevTimeEntry) {
        await prisma.time_Entry.create({
            data: {
                Project_ID: projectID,
                Task_ID: taskID,
                Start_Date_Time: new Date(),
            }
        })
    }
    revalidatePath("/projects/" + projectID, "page")  
}

const getTimeEntry = async ()=> {
    "use server"
    
    const prevTimeEntry = await prisma.time_Entry.findMany({
        where: {
            End_Date_Time: null
        }
    })
    return prevTimeEntry
}

const handleTimeEntry = async (formData)=> {
    "use server"

    const projectID = parseInt(formData.get("projectID"))
    const taskID = parseInt(formData.get("taskID"))
    const timeEntryID = parseInt(formData.get("timeEntryID"))
    const timeEntryDescription = formData.get("timeEntryDescription")
    const timeEntryMinutes = parseInt(formData.get("timeEntryMinutes"))
    const timeEntryStatus = formData.get("timeEntryStatus")
    const timeEntryDate = new Date(formData.get("timeEntryDate"))
    console.log(taskID)
    
    if (timeEntryID) {
        await prisma.time_Entry.update({
            where: {
                Time_Entry_ID: timeEntryID,
            },
            data: {
                Description: timeEntryDescription, 
                Minutes: timeEntryMinutes,
                Billing_Status: timeEntryStatus,
                End_Date_Time: timeEntryDate,
            }
        })
    }
    if (!timeEntryID) {
        await prisma.time_Entry.create({
            data: {
                Project_ID: projectID,
                Task_ID: taskID,
                Description: timeEntryDescription, 
                Minutes: timeEntryMinutes,
                Billing_Status: timeEntryStatus,
                End_Date_Time: timeEntryDate,
            }
        })
    }
    revalidatePath("/projects/" + projectID, "page")  
}

export default async function ProjectEdit( { projectID } ) {
    const project = await getOptions(projectID)
    const tasks = await getTasks(projectID)

    return (
        <Fragment>
            <div>{project.Project_Name}</div>
                <TaskList
                    tasks={tasks}
                    handleUpdate={handleUpdate}
                    startEndTime={startEndTime}
                    getTimeEntry={getTimeEntry}
                    handleTimeEntry={handleTimeEntry}
                />
        </Fragment>
    )
        
}