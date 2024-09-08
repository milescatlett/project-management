"use client"

import React, { useState } from 'react'
import { Dialog } from '@mui/material';
import DialogTitle from '@mui/material/DialogTitle';
import AddTaskIcon from '@mui/icons-material/AddTask';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import TaskCreateDetails from './TaskCreateDetails';


const TaskAdd = ( { handleSubmit } ) => {
    const [open, setOpen] = useState("")
    
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>  
      
      <AddTaskIcon 
        onClick={handleOpen}
      />
      <Dialog 
        open={open}
      >
        <div className="projects-bar">
        <DialogTitle>Add a Task</DialogTitle>
        <IconButton
        aria-label="close"
        onClick={handleClose}
      >
        <CloseIcon />
      </IconButton>
        
        </div>
        
          <TaskCreateDetails 
            handleSubmit={handleSubmit}
          />

      </Dialog>
  </div>
  )
}

export default TaskAdd