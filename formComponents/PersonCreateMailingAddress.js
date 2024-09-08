"use client"

import React, {useEffect} from 'react'

import { 
    Container,
    TextField,
    Button,
    FormControl
} from '@mui/material';

const PersonCreateMailingAddress = ( { setVisibility, visibility, person, showContinue, setShowContinue } ) => {
    useEffect(()=> {
        setShowContinue(true)
    }, [])

    return (
        <Container 
        sx={{
            display: visibility.mailingAddress
        }}
    >
                <FormControl className="full-width">
                    <TextField 
                        InputLabelProps={person.Address1_Mailing && { shrink: true }}
                        id="address1Mailing" 
                        className='text-form'
                        label="Mailing Address 1" 
                        variant="filled" 
                        name="address1Mailing"
                        defaultValue={person.Address1_Mailing}
                    />
                    <TextField 
                        InputLabelProps={person.Address2_Mailing && { shrink: true }}
                        id="address2Mailing" 
                        className='text-form'
                        label="Mailing Address 2" 
                        variant="filled" 
                        name="address2Mailing"
                        defaultValue={person.Address2_Mailing}
                    />
                    <TextField 
                        InputLabelProps={person.City_Mailing && { shrink: true }}
                        id="cityMailing" 
                        className='text-form'
                        label="Mailing City" 
                        variant="filled" 
                        name="cityMailing"
                        defaultValue={person.City_Mailing}
                    />
                    <TextField 
                        InputLabelProps={person.State_Mailing && { shrink: true }}
                        id="stateMailing" 
                        className='text-form'
                        label="Mailing State" 
                        variant="filled" 
                        name="stateMailing"
                        defaultValue={person.State_Mailing}
                    />
                    <TextField 
                        InputLabelProps={person.Zip_Mailing && { shrink: true }}
                        id="zipMailing" 
                        className='text-form'
                        label="Mailing Zip" 
                        variant="filled" 
                        name="zipMailing"
                        defaultValue={person.Zip_Mailing}
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
                                details: "inherit",
                                mailingAddress: "none"
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
                                mailingAddress: "none",
                                physicalAddress: "inherit"
                            })
                        }}
                    >Continue</Button>}
                </FormControl>
            </Container>
    )
}

export default PersonCreateMailingAddress