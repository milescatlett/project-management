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

const TimeEntry = ({timeEntry}) => {
    const [taskStatusLabel, setTaskStatusLabel] = useState("")
    console.log(timeEntry)
    const handleChange = (event) => {
        setTaskStatusLabel(event.target.value);
    };
    return (
        <Container>
            <FormControl className="full-width">
            <input type="hidden" name="timeEntryID" value={timeEntry.Time_Entry_ID} />
                <TextField
                    fullWidth
                    multiline
                    id="timeEntryDescription"
                    className="text-form"
                    label="Description"
                    variant="filled"
                    name="timeEntryDescription"
                    defaultValue={timeEntry.Description}
                />
                <TextField
                    fullWidth
                    id="timeEntryMinutes"
                    className="text-form"
                    label="Time Worked"
                    variant="filled"
                    name="timeEntryMinutes"
                    defaultValue={timeEntry.Minutes}
                />
                <FormControl>
                    <InputLabel id="timeEntryStatus">Billing Status</InputLabel>
                        <Select
                            className="text-form"
                            labelId="timeEntryStatus"
                            id="tsLabel"
                            label="Task Status"
                            name="timeEntryStatus"
                            //value={taskStatusLabel}
                            onChange={handleChange}
                            defaultValue=""
                        >
                            <MenuItem value="Billable">Billable</MenuItem>
                            <MenuItem value="Non-billable">Non-billable</MenuItem>
                        </Select>
                </FormControl>
                <LocalizationProvider dateAdapter={AdapterDayjs} >
                    <DatePicker 
                        className="text-form" 
                        name="timeEntryDate"
                        label="Task Due Date"
                        defaultValue={dayjs(new Date())}
                    />
                </LocalizationProvider>
                
            </FormControl>
        </Container>
    )

}

export default TimeEntry