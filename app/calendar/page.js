import React from 'react'
import DNDCalendar from '../calendarComponents/DNDCalendar'
import { PrismaClient } from '@prisma/client';
import { handleUpdate } from '@/formComponents/ProjectEdit'

const prisma = new PrismaClient()

const getEvents = async () => {
  "use server"

  const uuidv4 = ()=> {
    return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
  }

  const tasks = await prisma.task.findMany()
  const arr = []
  tasks.forEach(task => {
    arr.push({
      title: task.Task_Name,
      start: task.Task_Due_Date,
      end: task.Task_Due_Date,
      allDay: true,
      taskID: task.Task_ID,
      projectID: task.Project_ID,
      description: task.Task_Description,
      taskDueDate: task.Task_Due_Date,
      taskPriority: task.Task_Priority,
      taskName: task.Task_Name,
      resourceID: uuidv4()
    })
  })
  return arr
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

const handleUpdateEvent = async (taskID, taskDueDate)=> {
  "use server"
  
  await prisma.task.update({
    where: {
      Task_ID: taskID
    },
    data: {
      Task_Due_Date: taskDueDate
    }
  })
}


const page = async () => {
  const events = await getEvents()
  return (
    <DNDCalendar
      defaultEvents={events}
      handleUpdateEvent={handleUpdateEvent}
      handleUpdate={handleUpdate}
      getTasks={getTasks}
    />
  )
}

export default page