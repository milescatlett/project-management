"use client"

import React, {useState} from "react"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

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

const ProjectCreateDetails = ( { handleSubmit } ) => {
    const [taskStatusLabel, setTaskStatusLabel] = useState("")

    const handleChange = (event) => {
        setTaskStatusLabel(event.target.value);
    };

    return (
        <Container>
            <form action={handleSubmit}>
            <FormControl className="full-width">
                <TextField
                    fullWidth
                    id="taskName"
                    className="text-form"
                    label="Task Name"
                    variant="filled"
                    name="taskName"
                />
                <TextField
                    fullWidth
                    multiline
                    id="taskDescription"
                    className="text-form"
                    label="Task Description"
                    variant="filled"
                    name="taskDescription"
                />
                <FormControl fullWidth>
                    <InputLabel id="taskStatusLabel">Task Status</InputLabel>
                        <Select
                            className="text-form"
                            labelId="taskStatusLabel"
                            id="tsLabel"
                            label="Task Status"
                            name="taskStatusLabel"
                            value={taskStatusLabel}
                            onChange={handleChange}
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
                    />
                </LocalizationProvider>
                <FormControlLabel 
                    control={<Switch 
                        defaultChecked={false} 
                        name="taskPriority"
                    />} 
                    label="High Priority?" 
                    fullWidth
                    className="text-form"
                />
                <Button 
                    className='button-form'
                    variant="contained"
                    type="submit"
                >Save</Button>
            </FormControl>
            </form>
        </Container>
    )

}

export default ProjectCreateDetails