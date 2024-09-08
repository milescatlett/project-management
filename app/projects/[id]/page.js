import React, { Fragment } from 'react'
import ProjectEdit from '@/formComponents/ProjectEdit'
import TaskAdd from '@/formComponents/TaskAdd';
import { revalidatePath } from 'next/cache';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

const handleSubmit = async ( projectID, formData )=> {
  "use server"

  const taskName = formData.get("taskName")
  const taskDescription = formData.get("taskDescription")
  const taskStatusLabel = formData.get("taskStatusLabel")
  const taskDueDate = formData.get("taskDueDate")
  const taskPriority = formData.get("taskPriority")

  await prisma.task.create({
    data: {
      Project_ID: parseInt(projectID),
      Task_Name: taskName,
      Task_Description: taskDescription,
      Task_Status_Label: taskStatusLabel,
      Task_Due_Date: new Date(taskDueDate),
      Task_Priority: taskPriority,
    }
  })
  revalidatePath(`/projects/${projectID}`, "page") 
}

const handleUpdate = async ()=> {
  "use server"

  const taskName = formData.get("taskName")
  const taskDescription = formData.get("taskDescription")
  const taskStatusLabel = formData.get("taskStatusLabel")
  const taskDueDate = formData.get("taskDueDate")
  const taskPriority = formData.get("taskPriority")

  await prisma.task.update({
    where: {
      Task_ID: taskID
    },
    data: {
      Task_Name: taskName,
      Task_Description: taskDescription,
      Task_Status_Label: taskStatusLabel,
      Task_Due_Date: taskDueDate,
      Task_Priority: taskPriority,
    }
  })

  revalidatePath(`/projects/${projectID}`, "page") 
}

const page = ( { params } ) => {

  const handleSubmitWithProjectID = handleSubmit.bind(null, params.id)
  
  return (
    <Fragment>
    <div className="projects-bar">
      <span>Project { params.id }</span>
      <span><TaskAdd
        handleSubmit={handleSubmitWithProjectID}
      /></span>
      </div>
      <ProjectEdit 
        projectID={params.id}
      />
    </Fragment>
  )
}

export default page