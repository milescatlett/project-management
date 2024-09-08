"use client"

import React, {useState} from "react"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs'

import {
    Container, 
    TextField, 
    Button,
    FormControl, 
    Select,
    MenuItem,
    InputLabel,
    FormControlLabel,
    Switch,
} from '@mui/material'

const TaskUpdateDetails = ({task}) => {
    const [taskStatusLabel, setTaskStatusLabel] = useState("")

    const handleChange = (event) => {
        setTaskStatusLabel(event.target.value);
    };
    return (
        <Container>
            <FormControl className="full-width">
                <TextField
                    fullWidth
                    id="taskName"
                    className="text-form"
                    label="Task Name"
                    variant="filled"
                    name="taskName"
                    defaultValue={task.Task_Name}
                />
                <TextField
                    fullWidth
                    multiline
                    id="taskDescription"
                    className="text-form"
                    label="Task Description"
                    variant="filled"
                    name="taskDescription"
                    defaultValue={task.Task_Description}
                />
                <input type="hidden" name="taskID" value={task.Task_ID} />
                <FormControl>
                    <InputLabel id="taskStatusLabel">Task Status</InputLabel>
                        <Select
                            className="text-form"
                            labelId="taskStatusLabel"
                            id="tsLabel"
                            label="Task Status"
                            name="taskStatusLabel"
                            //value={taskStatusLabel}
                            onChange={handleChange}
                            defaultValue={task.Task_Status_Label}
                        >
                            <MenuItem value="Assigned">Assigned</MenuItem>
                            <MenuItem value="In Progress">In Progress</MenuItem>
                            <MenuItem value="In Review">In Review</MenuItem>
                        </Select>
                </FormControl>
                <LocalizationProvider dateAdapter={AdapterDayjs} >
                    <DatePicker 
                        className="text-form" 
                        name="taskDueDate"
                        label="Task Due Date"
                        defaultValue={dayjs(new Date(task.Task_Due_Date))}
                    />
                </LocalizationProvider>
                <FormControlLabel 
                    control={<Switch 
                        defaultChecked={task.Task_Priority} 
                        name="taskPriority"
                    />} 
                    label="High Priority?" 
                    className="text-form"
                />
            </FormControl>
        </Container>
    )

}

export default TaskUpdateDetails