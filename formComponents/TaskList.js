"use client"

import React, { Fragment, useState, useEffect } from 'react'
import { 
  AppBar, 
  Box, 
  Toolbar, 
  Typography,
  Button,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import TaskUpdateDetails from './TaskUpdateDetails';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import PauseIcon from '@mui/icons-material/Pause';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import UpdateIcon from '@mui/icons-material/Update';
import TimeEntry from './TimeEntry';
import { useParams } from 'next/navigation'

const TaskList = ({tasks, handleUpdate, startEndTime, getTimeEntry, handleTimeEntry}) => {
const [open, setOpen] = useState(false)
const [entryOpen, setEntryOpen] = useState(false)
const [t, setT] = useState({})
const [timeEntry, setTimeEntry] = useState({})
const [times, setTimes] = useState([])
const [minutes, setMinutes] = useState([])
const [prevMinutes, setPrevMinutes] = useState([])

const params = useParams()

const handleOpen = (task)=> {
  setOpen(true)
  setT(task)
}

const handleEntryOpen = (time, task)=> {
  setEntryOpen(true)
  setT(task)
  setTimeEntry(time)
}

const handleClose = ()=> {
  setOpen(false)
}

const handleEntryClose = ()=> {
  setEntryOpen(false)
}

const startClock = ()=> {
  new Promise(resolve=> {
    const timeEntry = getTimeEntry()
    resolve(timeEntry)
  }).then(data=> {
    const timeArr = []
    const minArr = []
    const prevArr = []
    data.forEach(datum=> {
      let min = diff_minutes(new Date(), datum.Start_Date_Time ? datum.Start_Date_Time : new Date())
      timeArr.push(datum)
      minArr.push({taskID: datum.Task_ID, minutes: min})
      prevArr.push({taskID: datum.Task_ID, minutes: datum.Minutes ? datum.Minutes : 1})
    })
    setTimes(timeArr)
    setMinutes(minArr)
    setPrevMinutes(prevArr)
  })
}

useEffect(()=> {
    startClock()
    setInterval(()=> {
      startClock()
    }, 2000)
}, [])

const diff_minutes = (dt2, dt1)=> {
  // Calculate the difference in milliseconds between the two provided dates and convert it to seconds
  if (dt1)  { 
    let diff =(dt2.getTime() - dt1.getTime()) / 1000; 
    // Convert the difference from seconds to minutes
    diff /= 60;
    // Return the absolute value of the rounded difference in minutes
    return Math.abs(Math.round(diff));
  }
 }

  return (
    <Fragment>
    <Dialog
      open={entryOpen}
      fullScreen
    >
      <DialogTitle>Time Entry</DialogTitle>
      <form action={handleTimeEntry}>
        <input type="hidden" name="projectID" value={params.id} />
        <input type="hidden" name="taskID" value={t.Task_ID} />
        <DialogContent>
          <TimeEntry 
            timeEntry={timeEntry ? timeEntry: ""}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleEntryClose}>Close</Button>
          <Button type="submit">{timeEntry ? "Update Entry" : "Submit Entry" }</Button>
        </DialogActions>
        </form>
    </Dialog>
    <Dialog
      open={open}
      fullScreen
    >
      <DialogTitle>{t.Task_Name}</DialogTitle>
      <form action={handleUpdate}>
        <DialogContent>
          <TaskUpdateDetails 
            task={t}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          <Button type="submit">Update Entry</Button>
        </DialogActions>
      </form>
    </Dialog>
    {tasks.map(task => {
      return (
        <Fragment key={task.Task_ID}>
          <Box 
            sx={{ flexGrow: 1 }} 
            className="task-menu-bar"
          >
            <AppBar position="static">
              <Toolbar>
              {task.Task_Priority && <PriorityHighIcon />}
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                  onClick={()=> {handleOpen(task)}}
                >
                  <TaskAltIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  {task.Task_Name}
                </Typography>
                <form action={startEndTime}>
                  <input type="hidden" name="projectID" value={task.Project_ID} />
                  <input type="hidden" name="taskID" value={task.Task_ID} />
                  <input type="hidden" name="minutes" value={
                    (parseInt(minutes.filter(minute=> minute.taskID === task.Task_ID)
                      .map(min=> {return min.minutes})) +
                    parseInt(prevMinutes.filter(minute=> minute.taskID === task.Task_ID)
                      .map(min=> {return min.minutes}))) > 0 && 
                    (parseInt(minutes.filter(minute=> minute.taskID === task.Task_ID)
                      .map(min=> {return min.minutes})) +
                    parseInt(prevMinutes.filter(minute=> minute.taskID === task.Task_ID)
                      .map(min=> {return min.minutes})))
                  }/>
                  <Button 
                    type="submit" 
                    color="inherit"
                  >
                    {times.filter(time=> time.Task_ID === task.Task_ID)
                      .map(time => {return time?.Start_Date_Time})[0]
                      ? <PauseIcon /> : <AccessTimeFilledIcon />}
                    &nbsp;{
                    (parseInt(minutes.filter(minute=> minute.taskID === task.Task_ID)
                      .map(min=> {return min.minutes})) +
                    parseInt(prevMinutes.filter(minute=> minute.taskID === task.Task_ID)
                      .map(min=> {return min.minutes}))) > 0 && 
                    (parseInt(minutes.filter(minute=> minute.taskID === task.Task_ID)
                      .map(min=> {return min.minutes})) +
                    parseInt(prevMinutes.filter(minute=> minute.taskID === task.Task_ID)
                      .map(min=> {return min.minutes})))
                  }
                  </Button>
                </form>
                <Button 
                    color="inherit"
                    onClick={()=> handleEntryOpen(times.filter(time=> time.Task_ID === task.Task_ID)
                      .map(time=> {return time})[0], task)}
                  >
                    <UpdateIcon 
                    />
                  </Button>
              </Toolbar>
            </AppBar>
          </Box>        
      </Fragment>
      )
    })}
    </Fragment>
  )
}

export default TaskList