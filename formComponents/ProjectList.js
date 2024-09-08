import * as React from 'react';
import { PrismaClient } from '@prisma/client';
import { 
    Box, 
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Button,
} from '@mui/material/';
import Link from 'next/link';
import EngineeringIcon from '@mui/icons-material/Engineering';

const prisma = new PrismaClient()


export default async function ProjectList() {
    const handleList = async ()=> {
        "use server"
        
        const projects = await prisma.project.findMany()
        return JSON.parse(JSON.stringify(projects))
    } 
    
    const projects = await handleList()

    return (
        <React.Fragment>
            {projects.map(project => {
                return (
                    <Link href={`/projects/${project.Project_ID}`}>
                    <Box sx={{ flexGrow: 1 }} className="task-menu-bar">
                        <AppBar position="static">
                            <Toolbar>
                                <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                                >
                            <EngineeringIcon />
                                </IconButton>
                                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                    {project.Project_Name}
                                </Typography>
                                
                            </Toolbar>
                        </AppBar>
                    </Box>
                    </Link>
                )
            })}
        </React.Fragment>
    );
}
