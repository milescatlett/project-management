import React from 'react'
import { PrismaClient } from '@prisma/client'
import Work from '@/formComponents/Work'
import dayjs from 'dayjs'
import { Exo_2 } from 'next/font/google'

const prisma = new PrismaClient()

const getTaskTimes = async ()=> {
    "use server"

    const getDay = (d, dow)=> {
        d = new Date(d);
        const day = d.getDay(),
            diff = d.getDate() - day + dow - 1 + (dow === 0 ? 8 : 0);
        return new Date(d.setDate(diff));
    }
    const mon = getDay(new Date(), 1)
    const tue = getDay(new Date(), 2)
    const wed = getDay(new Date(), 3)
    const thu = getDay(new Date(), 4)
    const fri = getDay(new Date(), 5)
    const sat = getDay(new Date(), 6)
    const sun = getDay(new Date(), 0)

    const timeEntries = await prisma.time_Entry.findMany({
      orderBy: {
        Task_ID: 'asc'
      },
      include: {
        task: true
      } 
    })

    const days = [
      timeEntries.filter(entry => dayjs(entry.End_Date_Time).format('MM/DD/YYYY') === dayjs(mon).format('MM/DD/YYYY')),
      timeEntries.filter(entry => dayjs(entry.End_Date_Time).format('MM/DD/YYYY') === dayjs(tue).format('MM/DD/YYYY')),
      timeEntries.filter(entry => dayjs(entry.End_Date_Time).format('MM/DD/YYYY') === dayjs(wed).format('MM/DD/YYYY')),
      timeEntries.filter(entry => dayjs(entry.End_Date_Time).format('MM/DD/YYYY') === dayjs(thu).format('MM/DD/YYYY')),
      timeEntries.filter(entry => dayjs(entry.End_Date_Time).format('MM/DD/YYYY') === dayjs(fri).format('MM/DD/YYYY')),
      timeEntries.filter(entry => dayjs(entry.End_Date_Time).format('MM/DD/YYYY') === dayjs(sat).format('MM/DD/YYYY')),
      timeEntries.filter(entry => dayjs(entry.End_Date_Time).format('MM/DD/YYYY') === dayjs(sun).format('MM/DD/YYYY'))
    ]
    console.log(days)
    const lengths = days.map(a=>a.length);
    const length = lengths.indexOf(Math.max(...lengths));

    const uniqueTasks = new Set()
    for (let h = 0; h < 7; h++) {
      for (let m = 0; m < lengths[h]; m++) {
        uniqueTasks.add(days[h][m].Task_ID)
      }
    }
    const arr = Array.from(uniqueTasks)
    const uniques = []
    arr.forEach(a => uniques.push([a]))
    for (let y = 0; y < 7; y++) {
      for (let z = 0; z < lengths[y]; z++) {
        for (let w = 0; w < uniques.length; w++) {
          if (uniques[w][0] === days[y][z].Task_ID && days[y][z].task.Task_Name !== uniques[w][1]) {
            uniques[w].push(days[y][z].task.Task_Name)
            uniques[w].push(w + 1)
          }
        }    
      }
    }
    const rows = []
    for (let i = 0; i < uniques.length; i++) {
      const row = {
        id: uniques[i][2],

        col1: uniques[i][1],
      }
      for (let j = 0; j < 7; j++) {
        for (let k = 0; k < lengths[j]; k++) {
          if (days[j][k].Task_ID === uniques[i][0]) {
            row[`col${j + 2}`] = days[j][k].Minutes
          }
        }
      }
      rows.push(row)
    }  

    const columns = [

      {field: "col1", headerName: 'Task', width: 200},
      {field: "col2", headerName: 'Mon', width: 85}, 
      {field: "col3", headerName: 'Tue', width: 85},
      {field: "col4", headerName: 'Wed', width: 85}, 
      {field: "col5", headerName: 'Thu', width: 85}, 
      {field: "col6", headerName: 'Fri', width: 85}, 
      {field: "col7", headerName: 'Sat', width: 85}, 
      {field: "col8", headerName: 'Sun', width: 85}
    ]
    return [columns, rows]
}

const WorkPage = async () => {
    const dow = await getTaskTimes()

  return (
    <Work 
      dow={dow}
    />
  )
}

export default WorkPage