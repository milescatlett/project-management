import React from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Link from 'next/link';
import ProjectList from '@/formComponents/ProjectList';

const page = () => {
  return (
    <div>
      <div className="projects-bar">
        <span>Projects</span>
        <span><Link href="/projects/add"><AddCircleIcon 
          sx={{color: "rgb(59, 59, 59)"}}
        /></Link></span>
      </div>
      <ProjectList />
    </div>
  )
}

export default page