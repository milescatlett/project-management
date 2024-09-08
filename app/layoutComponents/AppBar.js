"use client"

import React from 'react'
import { usePathname } from 'next/navigation'
import AppBarDetails from './AppBarDetails';

const AppBar = () => {
    const menu = [
        {title: "Projects", pathname: "/projects", component: <AppBarDetails key="projects" menu={[

        ]} />},
        {title: "Calendar", pathname: "/calendar", component: <AppBarDetails key="calendar" menu={[]}  />},
        {title: "Work", pathname: "/work", component: <AppBarDetails key="work" menu={[

        ]} />},
        {title: "Reports", pathname: "/reports", component: <AppBarDetails key="reports" menu={[]} />},
        {title: "People", pathname: "/person", component: <AppBarDetails key="person" menu={[
            {title: "Add Person", key: "add-person", pathname: "/person/add"},
        ]} />},
        {title: "Organizations", pathname: "/organization", component: <AppBarDetails key="organization" menu={[
            {title: "Add Organization", key: "add-organization", pathname: "/organization/add"},
        ]} />},
        {title: "Clients", pathname: "/client", component: <AppBarDetails key="client" menu={[
            {title: "Add Client", key: "add-client", pathname: "/client/add"},
        ]} />},
        {title: "Owners", pathname: "/owner", component: <AppBarDetails key="owner" menu={[
            {title: "Add Owner", key: "add-owner", pathname: "/owner/add"},
        ]} />},
        {title: "Accounting", pathname: "/accounting", component: <AppBarDetails key="accounting" menu={[
            {title: "Add Accounting", key: "add-accounting", pathname: "/accounting/add"},
        ]} />},
    ]

    const pathname = usePathname()
    if (pathname === "/") {
        return <AppBarDetails key="calendar" menu={[]}  />
    } else {
        return (
            menu.filter(menuItem => pathname.includes(menuItem.pathname)).map(menuItem => {
                return menuItem.component
            }
        ))
    }
}

export default AppBar