"use client"

import React from 'react'

import { 
    Container,
    TextField,
    Button,
    FormControl
} from '@mui/material';

const PersonCreateDetails = ( { setVisibility, visibility, email, person, getData, setEmail, showContinue, setShowContinue} ) => {
    
    return (
        <Container 
        sx={{
            display: visibility.details
        }}
    >
                <FormControl className="full-width">
                    <TextField 
                        fullWidth
                        InputLabelProps={email && { shrink: true }}
                        id="email" 
                        className='text-form'
                        label="Email" 
                        variant="filled" 
                        name="email"
                        type="email"  
                        defaultValue={email}
                        onBlur={(event)=> {
                            setEmail(event.target.value)
                            getData()
                            setShowContinue(false)
                        }}
                    />
                    {!person && <TextField 
                        fullWidth
                        id="password" 
                        className='text-form'
                        label="Password" 
                        variant="filled" 
                        name="password"
                        type="password"
                    />}
                    <TextField 
                        fullWidth
                        InputLabelProps={person.First_Name && { shrink: true }}
                        id="firstName" 
                        className='text-form'
                        label="First Name" 
                        variant="filled" 
                        name="firstName"
                        defaultValue={person.First_Name}
                    />
                    <TextField 
                        fullWidth
                        InputLabelProps={person.Last_Name && { shrink: true }}
                        id="lastName" 
                        className='text-form'
                        label="Last Name" 
                        variant="filled" 
                        name="lastName"
                        defaultValue={person.Last_Name}
                    />
                    <Button 
                        className='button-form'
                        variant="contained"
                        type="submit"
                        onClick={()=> setShowContinue(true)}
                    >Save</Button>
                    {showContinue && <Button 
                        className='button-form'
                        variant="contained"
                        type="submit"
                        onClick={(event)=> {
                            event.preventDefault()
                            setVisibility({
                                ...visibility,
                                details: "none",
                                mailingAddress: "inherit"
                            })
                        }}
                    >Continue</Button>}
                </FormControl>
            </Container>
    )
}

export default PersonCreateDetails