"use client"

import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ComputerIcon from '@mui/icons-material/Computer';
import AssignmentIcon from '@mui/icons-material/Assignment';
import InventoryIcon from '@mui/icons-material/Inventory';
import GroupIcon from '@mui/icons-material/Group';
import { Card } from '@mui/material';
import GroupsIcon from '@mui/icons-material/Groups';
import ReduceCapacityIcon from '@mui/icons-material/ReduceCapacity';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import Link from 'next/link';

const SideBar = () => {
  const user = [
    {title: 'Projects', icon: <AppRegistrationIcon />, pathname: "/projects"},
    {title: 'Work', icon: <ComputerIcon />, pathname: "/work"}, 
    {title: 'Calendar', icon: <CalendarMonthIcon />, pathname: "/calendar"}, 
  ]
  return (
    <Card
      className="side-bar"
    >
      <List>
        {user.map((text) => (
          <ListItem key={text.title} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {text.icon}
              </ListItemIcon>
              <Link href={text.pathname} className='menu-link'>
                <ListItemText primary={text.title} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Card>
  )
}

export default SideBar