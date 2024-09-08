import * as React from 'react';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

import { 
    Container, 
    Accordion, 
    AccordionDetails,
    AccordionSummary,
    Typography 

} from '@mui/material';
import { ArrowDownward } from '@mui/icons-material';

export default async function PersonList() {
    const handleList = async ()=> {
        "use server"
        
        const persons = await prisma.person.findMany()
        return JSON.parse(JSON.stringify(persons))
    } 
    
    const persons = await handleList()

    return (
        <Container>
            {persons.map(person => {
                return (
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ArrowDownward />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            <Typography>{person.First_Name} {person.Last_Name}</Typography>
                            
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>{person.Email}</Typography>
                            <Typography>{person.Address1_Mailing}</Typography>
                            <Typography>{person.Address2_Mailing}</Typography>
                            <Typography>{person.City_Mailing}</Typography>
                            <Typography>{person.State_Mailing}</Typography>
                            <Typography>{person.Zip_Mailing}</Typography>
                        </AccordionDetails>
                    </Accordion>
                )
            })}
        </Container>
    );
}
