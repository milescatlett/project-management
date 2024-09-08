import * as React from 'react';
import PersonList from '@/formComponents/PersonList'
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/auth/Auth"
import { redirect } from 'next/navigation'


const page = async () => {
        return (
            <PersonList />
        )
    
}

export default page