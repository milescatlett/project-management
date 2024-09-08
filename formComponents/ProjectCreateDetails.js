"use client"

import React, {useEffect, useState} from "react"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import {
    Container, 
    TextField, 
    Button,
    FormControl, 
    Autocomplete
} from '@mui/material'

const ProjectCreateDetails = ( { handleSubmit } ) => {

    return (
        <Container>
            <FormControl className="full-width">
            <form action={handleSubmit}>
                <TextField
                    fullWidth
                    id="projectName"
                    className="text-form"
                    label="Project Name"
                    variant="filled"
                    name="projectName"
                />
                <TextField
                    fullWidth
                    id="projectStatus"
                    className="text-form"
                    label="Project Status"
                    variant="filled"
                    name="projectStatus"
                />
                <TextField
                    fullWidth
                    id="projectDescription"
                    className="text-form"
                    label="Project Description"
                    variant="filled"
                    name="projectDescription"
                />
                <LocalizationProvider dateAdapter={AdapterDayjs} >
                    <DatePicker 
                        className="text-form" 
                        name="projectDueDate"
                    />
                </LocalizationProvider>

                <Button 
                    className='button-form'
                    variant="contained"
                    type="submit"
                >Save</Button>
                </form>
            </FormControl>
        </Container>
    )

}

export default ProjectCreateDetails