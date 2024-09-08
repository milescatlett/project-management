"use client"

import React, {useState, Fragment, useEffect} from 'react'
import PersonCreateDetails from './PersonCreateDetails'
import PersonCreateMailingAddress from './PersonCreateMailingAddress'
import PersonCreateOther from './PersonCreateOther'
import PersonCreatePhysicalAddress from './PersonCreatePhysicalAddress'
import PersonCreateOrgs from './PersonCreateOrgs'

const PersonCreateFormWizard = ( {
    handleSubmit, 
    handleUpdate, 
    handleKeepFormUpdated, 
    handleUpdateOther, 
    handleUpdatePhysical, 
    handleUpdateOrg,
    getOrganizations,
    getClients,
    getOwners,
    getAccounting,
    getPrimaryContacts,
    getPersons,
    persons,
    organizations, 
    clients,
    primaryContacts, 
    accountings,
    owners
} ) => {
    const [visibility, setVisibility] = useState({
        details: "inherit",
        mailingAddress: "none",
        physicalAddress: "none",
        other: "none",
        orgs: "none"
    })
    const [sessionEmail, setSessionEmail] = useState("")
    const [email, setEmail] = useState("")
    const [person, setPerson] = useState("")
    const [showContinue, setShowContinue] = useState(false)
    
    const keepFormUpdated = handleKeepFormUpdated.bind(null, email)
    const updateWithEmail = handleUpdate.bind(null, sessionEmail)
    const updateOtherWithEmail = handleUpdateOther.bind(null, sessionEmail)
    const updatePhysicalWithEmail = handleUpdatePhysical.bind(null, sessionEmail)
    const updateOrgWithEmail = handleUpdateOrg.bind(null, sessionEmail)

    useEffect(()=> {
        const sessionEmail = window.sessionStorage.getItem("email")
        setSessionEmail(sessionEmail)
    }, [showContinue])

    useEffect(()=> {
        if (email) {
            window.sessionStorage.setItem("email", email)
            window.sessionStorage.setItem("visibility", JSON.stringify(visibility))
        }
    }, [email, visibility])

    useEffect(()=> {
        const email = window.sessionStorage.getItem("email")
        const visibility = window.sessionStorage.getItem("visibility")
        if (email) {
            setEmail(email)
            setVisibility(JSON.parse(visibility))
        }
    }, [])

    const getData = async ()=> {
        const person = await keepFormUpdated(email)
        if (person) {
            setPerson(person)
            return person
        } else {
            setPerson("")
            return ""
        }
    }

    useEffect(()=> {
        if (email){
            getData()
        }
    }, [email])

    return (
        <Fragment>
            <form action={handleSubmit}>
                <PersonCreateDetails 
                    setVisibility={setVisibility}
                    visibility={visibility}
                    handleKeepFormUpdated={handleKeepFormUpdated} 
                    email={email}
                    setEmail={setEmail}
                    person={person}
                    getData={getData}
                    showContinue={showContinue}
                    setShowContinue={setShowContinue}
                />
            </form>
            <form action={updateWithEmail}>
                <PersonCreateMailingAddress 
                    setVisibility={setVisibility}
                    visibility={visibility}
                    handleKeepFormUpdated={handleKeepFormUpdated} 
                    person={person}
                    showContinue={showContinue}
                    setShowContinue={setShowContinue}
                />
            </form>
            <form action={updatePhysicalWithEmail}>
                <PersonCreatePhysicalAddress 
                    setVisibility={setVisibility}
                    visibility={visibility}
                    handleKeepFormUpdated={handleKeepFormUpdated} 
                    person={person}
                    showContinue={showContinue}
                    setShowContinue={setShowContinue}
                />
            </form>
            <form action={updateOtherWithEmail}>
                <PersonCreateOther
                    setVisibility={setVisibility}
                    visibility={visibility}
                    handleKeepFormUpdated={handleKeepFormUpdated} 
                    person={person}
                    showContinue={showContinue}
                    setShowContinue={setShowContinue}
                />
            </form>
            <form action={updateOrgWithEmail}>
                <PersonCreateOrgs
                    setVisibility={setVisibility}
                    visibility={visibility}
                    handleKeepFormUpdated={handleKeepFormUpdated} 
                    person={person}
                    showContinue={showContinue}
                    setShowContinue={setShowContinue}
                    getOrganizations={getOrganizations}
                    getClients={getClients}
                    getAccounting={getAccounting}
                    getOwners={getOwners}
                    getPrimaryContacts={getPrimaryContacts}
                    getPersons={getPersons}
                    organizations={organizations}
                    owners={owners}
                    clients={clients}
                    accountings={accountings}
                    primaryContacts={primaryContacts}
                    persons={persons}
                />
            </form>
        </Fragment>
    )
}

export default PersonCreateFormWizard