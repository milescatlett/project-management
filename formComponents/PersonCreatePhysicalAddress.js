"use client"

import React, { useEffect } from 'react'

import { 
    Container,
    TextField,
    Button,
    FormControl
} from '@mui/material';

const PersonCreatePhysicalAddress = ( { setVisibility, visibility, person, showContinue, setShowContinue } ) => {
    useEffect(()=> {
        setShowContinue(true)
    }, [])

    return (
        <Container 
        sx={{
            display: visibility.physicalAddress
        }}
    >
            <FormControl className="full-width">
                <TextField 
                    InputLabelProps={person.Address1_Physical && { shrink: true }}
                    id="address1Physical" 
                    className='text-form'
                    label="Physical Address 1" 
                    variant="filled" 
                    name="address1Physical"
                    defaultValue={person.Address1_Physical}
                />
                <TextField 
                    InputLabelProps={person.Address2_Physical && { shrink: true }}
                    id="address2Physical" 
                    className='text-form'
                    label="Physical Address 2" 
                    variant="filled" 
                    name="address2Physical"
                    defaultValue={person.Address2_Physical}
                />
                <TextField 
                    InputLabelProps={person.City_Physical && { shrink: true }}
                    id="cityPhysical" 
                    className='text-form'
                    label="Physical City" 
                    variant="filled" 
                    name="cityPhysical"
                    defaultValue={person.City_Physical}
                />
                <TextField 
                    InputLabelProps={person.State_Physical && { shrink: true }}
                    id="statePhysical" 
                    className='text-form'
                    label="Physical State" 
                    variant="filled" 
                    name="statePhysical"
                    defaultValue={person.State_Physical}
                />
                <TextField 
                    InputLabelProps={person.Zip_Physical && { shrink: true }}
                    id="zipPhysical" 
                    className='text-form'
                    label="Physical Zip" 
                    variant="filled" 
                    name="zipPhysical"
                    defaultValue={person.Zip_Physical}
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
                            physicalAddress: "none",
                            mailingAddress: "inherit"
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
                            physicalAddress: "none",
                            other: "inherit"
                        })
                    }}
                >Continue</Button>}
            </FormControl>
        </Container>
    )
}

export default PersonCreatePhysicalAddress