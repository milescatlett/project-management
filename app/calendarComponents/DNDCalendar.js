"use client"

import React, { useCallback, useEffect, useState } from 'react'
import {Calendar, momentLocalizer} from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { Views } from 'react-big-calendar';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop'
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';
import dayjs from 'dayjs';
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
import TaskUpdateDetails from '@/formComponents/TaskUpdateDetails'
import TaskCreateDetails from '@/formComponents/TaskCreateDetails'

const DragAndDropCalendar = withDragAndDrop(Calendar)

function DNDCalendar({defaultEvents, handleUpdateEvent, handleUpdate, getTasks}) {
    const [date, setDate] = useState("")
    const [view, setView] = useState(Views.MONTH)
    const [events, setEvents] = useState([])
    const [task, setTask] = useState({})
    const [event, setEvent] = useState({})
    const [open, setOpen] = useState(false)
    const [action, setAction] = useState("")


    const localizer = momentLocalizer(moment)

    const onView = (newView) => {
        if (newView === "week") setView(Views.WEEK)
        else if (newView === "month") setView(Views.MONTH)
        else if (newView === "day") setView(Views.DAY)
    }

    const getTasksWithProjectID = (e)=> {
        new Promise (resolve => {
            resolve(getTasks(e.projectID))
        }).then(data=> {
            setTask(data.filter(datum=> parseInt(datum.Task_ID) === parseInt(e.taskID)).filter(Boolean)[0])
            setEvent(events.filter(event=> event.resourceID === e.resourceID).filter(Boolean)[0])
            setEvents(events.map(event=> {
                if (e.taskID === event.taskID) {
                    return {
                        ...event,
                        taskName: e.taskName,
                    }
                } else {
                    return event
                }
            }))
            setOpen(true)
        })
    }

    useEffect(()=> {
        if (action === "drop") {
            handleUpdateEvent(event.taskID, event.start)
        }
    }, [event])

    useEffect(()=> {
        console.log(event)
    }, [event])

    useEffect(()=> {
        setEvents(defaultEvents)
    }, [])

    const onNavigate = (newDate) => {
        setDate(newDate)
    }

    return (
        <div style={{height: "600px"}}>
            <DragAndDropCalendar
                date={date}
                onNavigate={onNavigate}
                dayLayoutAlgorithm="no-overlap"
                events={events}
                localizer={localizer}
                view={view}
                onView={onView}
                views={[Views.MONTH, Views.WEEK, Views.DAY]}
                selectable={true}
                onSelectEvent={((e)=>{
                    getTasksWithProjectID(e)
                })}
                onEventDrop={(e)=>{
                    setAction("drop")
                    setEvent(events.map(event=> {
                        if (event.resourceID === e.event.resourceID){
                            return {
                                ...event,
                                start: e.start,
                                end: e.start,
                            }
                        }
                    }).filter(Boolean)[0])
                    setEvents(events.map(event=> {
                        if (e.event.taskID === event.taskID) {
                            return {
                                ...event,
                                start: e.start,
                                end: e.start,
                            }
                        } else {
                            return event
                        }
                    }))
                }}
            />
            <Dialog
                open={open}
                fullScreen
            >
                <DialogTitle></DialogTitle>
                <form action={handleUpdate}>
                    <DialogContent>{
                        <TaskUpdateDetails 
                            task={task}
                        />
                    }</DialogContent>
                    <DialogActions>
                        <Button onClick={()=> {
                            setOpen(false)
                        }}>Cancel</Button>
                        <Button type="submit">Update Task</Button>
                    </DialogActions>
                </form>
            </Dialog>
        </div>
    );
}
    
    export default DNDCalendar;
