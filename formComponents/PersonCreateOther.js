"use client"

import React, {useEffect} from 'react'

import { 
    Container,
    TextField,
    Button,
    FormControl
} from '@mui/material';

const PersonCreateOther = ( { setVisibility, visibility, person, showContinue, setShowContinue } ) => {
    useEffect(()=> {
        setShowContinue(true)
    }, [])

    return (
            <Container 
                sx={{
                    display: visibility.other
                }}
            >
                <FormControl className="full-width">
                    <TextField 
                        InputLabelProps={person.Website_URL && { shrink: true }}
                        id="websiteURL" 
                        className='text-form'
                        label="Website URL" 
                        variant="filled" 
                        name="websiteURL"
                        defaultValue={person.Website_URL}
                    />
                    <TextField 
                        InputLabelProps={person.Logo_URL && { shrink: true }}
                        id="logoURL" 
                        className='text-form'
                        label="Logo URL" 
                        variant="filled" 
                        name="logoURL"
                        defaultValue={person.Logo_URL}
                    />
                    <TextField 
                        InputLabelProps={person.Company_Profile && { shrink: true }}
                        id="companyProfile" 
                        className='text-form'
                        label="Company Profile" 
                        variant="filled" 
                        name="companyProfile"
                        defaultValue={person.Company_Profile}
                    />
                    <TextField 
                        InputLabelProps={person.Internal_Notes && { shrink: true }}
                        id="internalNotes" 
                        className='text-form'
                        label="Internal Notes" 
                        variant="filled" 
                        name="internalNotes"
                        defaultValue={person.Internal_Notes}
                    />
                    <TextField 
                        InputLabelProps={person.Number_of_Employees && { shrink: true }}
                        id="numberOfEmployees" 
                        className='text-form'
                        label="Number of Employees" 
                        variant="filled" 
                        name="numberOfEmployees"
                        defaultValue={person.Number_of_Employees}
                    />
                    <TextField 
                        InputLabelProps={person.Number_of_Contractors && { shrink: true }}
                        id="numberOfContractors" 
                        className='text-form'
                        label="Number of Contractors" 
                        variant="filled" 
                        name="numberOfContractors"
                        defaultValue={person.Number_of_Contractors}
                    />
                    <Button 
                        className='button-form'
                        variant="contained"
                        type="submit"
                        onClick={()=> setShowContinue(true)}
                    >Save</Button>
                    <Button 
                        className='button-form'
                        variant="contained"
                        type="submit"
                        onClick={(event)=> {
                            event.preventDefault()
                            setVisibility({
                                ...visibility,
                                physicalAddress: "inherit",
                                other: "none"
                            })
                        }}
                    >Back</Button>
                    {showContinue && <Button 
                        className='button-form'
                        variant="contained"
                        type="submit"
                        onClick={(event)=> {
                            event.preventDefault()
                            setVisibility({
                                ...visibility,
                                orgs: "inherit",
                                other: "none"
                            })
                        }}
                    >Continue</Button>}
                </FormControl>
            </Container>
    )
}

export default PersonCreateOther