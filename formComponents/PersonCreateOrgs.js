"use client"

import React, { Fragment, useEffect, useState } from 'react'
import Switch from '@mui/material/Switch';
import { Container } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Autocomplete, TextField, Typography, Button } from '@mui/material';

const PersonCreateOrgs = ( { 
    getOrganizations, 
    getClients, 
    getAccounting, 
    getOwners, 
    getPrimaryContacts, 
    visibility, 
    setVisibility, 
    getPersons, 
    handleKeepFormUpdated, 
    showContinue, 
    setShowContinue,
    //persons,
    //organizations, 
    //clients,
    //primaryContacts, 
    //accountings,
    //owners
} ) => {
    const [organization, setOrganization] = useState("")
    const [organizationAddCreate, setOrganizationAddCreate] = useState("")
    const [client, setClient] = useState("")
    const [clientsAddCreate, setClientsAddCreate] = useState("")
    const [owner, setOwner] = useState("")
    const [ownersAddCreate, setOwnersAddCreate] = useState("")
    const [primaryContact, setPrimaryContact] = useState("")
    const [primaryContactsAddCreate, setPrimaryContactsAddCreate] = useState("")
    const [accounting, setAccounting] = useState("")
    const [accountingsAddCreate, setAccountingsAddCreate] = useState("")
    const [organizations, setOrganizations] = useState([])
    const [clients, setClients] = useState([])
    const [accountings, setAccountings] = useState([])
    const [owners, setOwners] = useState([])
    const [primaryContacts, setPrimaryContacts] = useState([])
    const [persons, setPersons] = useState([])
    

    useEffect(()=> {
        const handleGet = async ()=> {
            const organizations = await getOrganizations()
            setOrganizations(organizations)
            const clients = await getClients()
            setClients(clients)
            const accountings = await getAccounting()
            setAccountings(accountings)
            const owners = await getOwners()
            setOwners(owners)
            const primaryContacts = await getPrimaryContacts()
            setPrimaryContacts(primaryContacts)
            const persons = await getPersons()
            setPersons(persons)
        }
        handleGet()
    }, [])

    useEffect(()=> {
        setShowContinue(true)
    }, [])

    return (
        <Container 
            sx={{
                display: visibility.orgs
            }}
        >
            <FormGroup>
                <Container 
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                    }}
                >
                    <Typography className="switch-options" sx={!organizationAddCreate &&{
                        fontWeight: "600"
                    }}>
                        Choose Existing Organization
                    </Typography>
                        <Switch 
                            checked={organizationAddCreate} 
                            onChange={(event)=> {
                                setOrganizationAddCreate(event.target.checked)
                            }}
                        />
                    <Typography className="switch-options" sx={organizationAddCreate &&{
                        fontWeight: "600"
                    }}>
                        Create New Organization
                    </Typography>
                </Container>
                {!organizationAddCreate && <Autocomplete
                    disablePortal
                    id="oID"
                    options={organizations}
                    className="text-form"
                    blurOnSelect
                    onChange={(event, value) => setOrganization(value.id)}
                    isOptionEqualToValue={(option, value)=> parseInt(option.id) === parseInt(value.id)}
                    renderInput={(params) => <TextField {...params} label="Organization" />}
                />}
                <input type="hidden" name="orgID" value={organization} />
                {organizationAddCreate && <Fragment>
                    <TextField
                        fullWidth
                        id="organizationName"
                        className="text-form"
                        label="Organization Name"
                        variant="filled"
                        name="organizationName"
                    />
                    <TextField
                        fullWidth
                        id="organizationType"
                        className="text-form"
                        label="Organization Type"
                        variant="filled"
                        name="organizationType"
                    />
                </Fragment>}

                <Container 
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                    }}
                >
                    <Typography className="switch-options" sx={!clientsAddCreate &&{
                        fontWeight: "600"
                    }}>
                        Choose Existing Client
                    </Typography>
                        <Switch 
                            checked={clientsAddCreate} 
                            onChange={(event)=> {
                                setClientsAddCreate(event.target.checked)
                            }}
                        />
                    <Typography className="switch-options" sx={clientsAddCreate &&{
                        fontWeight: "600"
                    }}>
                        Create New Client
                    </Typography>
                </Container>
                {!clientsAddCreate && <Autocomplete
                    disablePortal
                    id="cID"
                    options={clients}
                    className="text-form"
                    blurOnSelect
                    onChange={(event, value) => setClient(value.id)}
                    isOptionEqualToValue={(option, value)=> parseInt(option.id) === parseInt(value.id)}
                    renderInput={(params) => <TextField {...params} label="Clients" />}
                />}
                <input type="hidden" name="clientID" value={client} />
                {clientsAddCreate && <Fragment>
                    <TextField
                        fullWidth
                        id="clientName"
                        className="text-form"
                        label="Client Name"
                        variant="filled"
                        name="clientName"
                    />
                    <TextField
                        fullWidth
                        id="numberOfEmployees"
                        className="text-form"
                        label="Number of Employees"
                        variant="filled"
                        name="numberOfEmployees"
                    />
                </Fragment>}

                <Container 
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                    }}
                >
                    <Typography className="switch-options" sx={!ownersAddCreate &&{
                        fontWeight: "600"
                    }}>
                        Choose Existing Owner
                    </Typography>
                        <Switch 
                            checked={ownersAddCreate} 
                            onChange={(event)=> {
                                setOwnersAddCreate(event.target.checked)
                            }}
                        />
                    <Typography className="switch-options" sx={ownersAddCreate &&{
                        fontWeight: "600"
                    }}>
                        Create New Owner
                    </Typography>
                </Container>
                {!ownersAddCreate && <Autocomplete
                    disablePortal
                    id="ownID"
                    options={owners}
                    className="text-form"
                    blurOnSelect
                    onChange={(event, value) => setOwner(value.id)}
                    isOptionEqualToValue={(option, value)=> parseInt(option.id) === parseInt(value.id)}
                    renderInput={(params) => <TextField {...params} label="Owners" />}
                />}
                <input type="hidden" name="ownerID" value={owner} />
                {ownersAddCreate && <Fragment>
                    <TextField
                        fullWidth
                        id="ownerName"
                        className="text-form"
                        label="Owner Name"
                        variant="filled"
                        name="ownerName"
                    />
                </Fragment>}

                <Container 
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                    }}
                >
                    <Typography className="switch-options" sx={!primaryContactsAddCreate &&{
                        fontWeight: "600"
                    }}>
                        Choose Existing Primary Contact
                    </Typography>
                        <Switch 
                            checked={primaryContactsAddCreate} 
                            onChange={(event)=> {
                                setPrimaryContactsAddCreate(event.target.checked)
                            }}
                        />
                    <Typography className="switch-options" sx={primaryContactsAddCreate &&{
                        fontWeight: "600"
                    }}>
                        Create New Primary Contact
                    </Typography>
                </Container>
                {!primaryContactsAddCreate && <Autocomplete
                    disablePortal
                    id="pcID"
                    options={primaryContacts}
                    className="text-form"
                    blurOnSelect
                    onChange={(event, value) => setPrimaryContact(value.id)}
                    isOptionEqualToValue={(option, value)=> parseInt(option.id) === parseInt(value.id)}
                    renderInput={(params) => <TextField {...params} label="Primary Contacts" />}
                />}
                <input type="hidden" name="primaryContactID" value={primaryContact} />
                {primaryContactsAddCreate && <Fragment>
                    <TextField
                        fullWidth
                        id="primaryContactName"
                        className="text-form"
                        label="Primary Contact Name"
                        variant="filled"
                        name="primaryContactName"
                    />
                </Fragment>}

                <Container 
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                    }}
                >
                    <Typography className="switch-options" sx={!accountingsAddCreate &&{
                        fontWeight: "600"
                    }}>
                        Choose Existing Accounting
                    </Typography>
                        <Switch 
                            checked={accountingsAddCreate} 
                            onChange={(event)=> {
                                setAccountingsAddCreate(event.target.checked)
                            }}
                        />
                    <Typography className="switch-options" sx={accountingsAddCreate &&{
                        fontWeight: "600"
                    }}>
                        Create New Accounting
                    </Typography>
                </Container>
                {!accountingsAddCreate && <Autocomplete
                    disablePortal
                    id="accID"
                    options={accountings}
                    className="text-form"
                    blurOnSelect
                    onChange={(event, value) => setAccounting(value.id)}
                    isOptionEqualToValue={(option, value)=> parseInt(option.id) === parseInt(value.id)}
                    renderInput={(params) => <TextField {...params} label="Accounting" />}
                />}
                <input type="hidden" name="accountingID" value={accounting} />
                {accountingsAddCreate && <Fragment>
                    <TextField
                        fullWidth
                        id="accountingName"
                        className="text-form"
                        label="Accounting Name"
                        variant="filled"
                        name="accountingName"
                    />
                    <TextField
                        fullWidth
                        id="EIN"
                        className="text-form"
                        label="EIN"
                        variant="filled"
                        name="EIN"
                    />
                    <TextField
                        fullWidth
                        id="stateTaxID"
                        className="text-form"
                        label="State Tax ID"
                        variant="filled"
                        name="stateTaxID"
                    />
                </Fragment>}
                
                <Button 
                        className='button-form'
                        variant="contained"
                        type="submit"
                        onClick={(event)=> {
                            event.preventDefault()
                            setVisibility({
                                ...visibility,
                                orgs: "none",
                                other: "inherit"
                            })
                        }}
                    >Back</Button>
                <Button 
                    className='button-form'
                    variant="contained"
                    type="submit"
                >Save</Button>
            </FormGroup>
        </Container>
    )
}

export default PersonCreateOrgs