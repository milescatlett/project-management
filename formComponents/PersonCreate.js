import React, { Fragment } from 'react';
import { PrismaClient } from '@prisma/client';
import { revalidatePath } from 'next/cache';
import PersonCreateFormWizard from './PersonCreateFormWizard';
import { authOptions } from "@/auth/Auth"
import { getServerSession } from "next-auth/next"

const secret = process.env.NEXTAUTH_SECRET

const bcrypt = require('bcryptjs');

const prisma = new PrismaClient()

const getHash = async (password)=> {
    const saltRounds = 10;
    return new Promise((resolve)=> { 
        bcrypt.genSalt(saltRounds, (err, salt) => {
            if (err) {
                console.log(err)
                return
            } else {
                bcrypt.hash(password, salt, (err, hash) => {
                    if (err) {
                        console.log(err)
                        return
                    } else {
                        resolve(hash) 
                    }
                })
            }
        })
    })
}

const handleSubmit = async (formData)=> {
    "use server"

    const session = await getServerSession(authOptions)
    const firstName = formData.get("firstName")
    const lastName = formData.get("lastName")
    const email = formData.get("email")
    const password = formData.get("password")
    let hash
    if (password) hash = await getHash(password)

    try {
        const prevCreatedPerson = await prisma.person.findUnique({
            where: {
                Email: email
            }
        })

        if (!prevCreatedPerson) {
            await prisma.person.create({
                data: {
                    First_Name: firstName,
                    Last_Name: lastName,
                    Status: "Active",
                    Email: email,
                    Password: hash,
                    //Created_By: session.user.id,
                    //Created_Date: new Date()
                }
            })
        } else {
            await prisma.person.update({
                where: {
                    Email: email,
                },
                data: {
                    First_Name: firstName,
                    Last_Name: lastName,
                    Status: "Active",
                    Email: email,
                    Updated_By: session.user.id,
                    Updated_Date: new Date()
                }
            })
            if (password) {
                await prisma.person.update({
                    where: {
                        Email: email,
                    },
                    data: {
                        Password: hash,
                        Updated_By: session.user.id,
                        Updated_Date: new Date()
                    }
                })
            }
        }
        revalidatePath("/person/add", "page")    
    } catch {
        console.log(error)
    }
    

    
}

const handleUpdate = async (sessionEmail, formData)=> {
    "use server"
    const session = await getServerSession(authOptions)
    const address1Mailing = formData.get("address1Mailing")
    const address2Mailing = formData.get("address2Mailing")
    const cityMailing = formData.get("cityMailing")
    const stateMailing = formData.get("stateMailing")
    const zipMailing = formData.get("zipMailing")
    

    const person = await prisma.person.update({
        where: {
            Email: sessionEmail,
        },
        data: {
            Address1_Mailing: address1Mailing,
            Address2_Mailing: address2Mailing,
            City_Mailing: cityMailing,
            State_Mailing: stateMailing,
            Zip_Mailing: zipMailing,
        }
    })
    revalidatePath("/person/add", "page")
}

const handleUpdateOther = async (sessionEmail, formData)=> {
    "use server"

    const websiteURL = formData.get("websiteURL")
    const logoURL = formData.get("logoURL")
    const companyProfile = formData.get("companyProfile")
    const internalNotes = formData.get("internalNotes")
    const numberOfEmployees = formData.get("numberOfEmployees")
    const numberOfContractors = formData.get("numberOfContractors")
    

    const person = await prisma.person.update({
        where: {
            Email: sessionEmail,
        },
        data: {
            Website_URL: websiteURL,
            Logo_URL: logoURL,
            Company_Profile: companyProfile,
            Internal_Notes: internalNotes,
            Number_of_Employees: parseInt(numberOfEmployees),
            Number_of_Contractors: parseInt(numberOfContractors),
        }
    })
    revalidatePath("/person/add", "page")
}

const handleUpdatePhysical = async (sessionEmail, formData)=> {
    "use server"

    const address1Physical = formData.get("address1Physical")
    const address2Physical = formData.get("address2Physical")
    const cityPhysical = formData.get("cityPhysical")
    const statePhysical = formData.get("statePhysical")
    const zipPhysical = formData.get("zipPhysical")
    

    const person = await prisma.person.update({
        where: {
            Email: sessionEmail,
        },
        data: {
            Address1_Physical: address1Physical,
            Address2_Physical: address2Physical,
            City_Physical: cityPhysical,
            State_Physical: statePhysical,
            Zip_Physical: zipPhysical,
        }
    })
    revalidatePath("/person/add", "page")
}

const handleKeepFormUpdated = async (sessionEmail, formData)=> {
    "use server"

    const person = await prisma.person.findUnique({
        where: {
            Email: sessionEmail,
        },
    })
    return JSON.parse(JSON.stringify(person))
} 

const getPersons = async () => {
    "use server"
    
    const persons = await prisma.person.findMany()
    const options = persons.map(person => { return {label: person.First_Name, id: person.Person_ID}})
    return options
} 

const persons = await getPersons()

const getOrganizations = async () => {
    "use server"
    
    const organizations = await prisma.organization.findMany()
    const options = organizations.map(organization => { return {label: organization.Organization_Name, id: organization.Organization_ID}})
    return options
}

const organizations = await getOrganizations()

const getClients = async () => {
    "use server"
    
    const clients = await prisma.client.findMany()
    const options = clients.map(client => { return {label: client.Client_Name, id: client.Client_ID}})
    return options
}

const clients = await getClients()

const getOwners = async () => {
    "use server"
    
    const owners = await prisma.owner.findMany()
    const options = owners.map(owner => { return {label: owner.Owner_Name, id: owner.Owner_ID}})
    return options
}

const owners = await getOwners()

const getAccounting = async () => {
    "use server"
    
    const accountings = await prisma.accounting.findMany()
    const options = accountings.map(accounting => { return {label: accounting.Accounting_Name, id: accounting.Accounting_ID}})
    return options
}

const accountings = await getAccounting()

const getPrimaryContacts = async () => {
    "use server"
    
    const primary_contacts = await prisma.primary_Contact.findMany()
    const options = primary_contacts.map(primary_contact => { return {label: primary_contact.Primary_Contact_Name, id: primary_contact.Primary_Contact_ID}})
    return options
}

const primaryContacts = await getPrimaryContacts()

const handleUpdateOrg = async (sessionEmail, formData)=> {
    "use server"

    const session = await getServerSession(authOptions)
    const orgID = formData.get("orgID")
    const organizationName = formData.get("organizationName")
    const organizationType = formData.get("organizationType")
    const clientID = formData.get("clientID")
    const clientName = formData.get("clientName")
    const numberOfEmployees = formData.get("numberOfEmployees")
    const ownerID = formData.get("ownerID")
    const ownerName = formData.get("ownerName")
    const primaryContactID = formData.get("primaryContactID")
    const primaryContactName = formData.get("primaryContactName")
    const accountingID = formData.get("accountingID")
    const accountingName = formData.get("accountingName")
    const EIN = formData.get("EIN")
    const stateTaxID = formData.get("stateTaxID")

    const person = await prisma.person.findUnique({
        where: {
            Email: sessionEmail,
        }
    })

    await prisma.person.update({
        where: {
            Person_ID: person.Person_ID,
        },
        data: {
            Organization_ID: parseInt(orgID),
            Client_ID: parseInt(clientID),
            Owner_ID: parseInt(ownerID),
            Primary_Contact_ID: parseInt(primaryContactID),
            Accounting_ID: parseInt(accountingID),
        }
    })
    if (organizationName && organizationType) {
        const org = await prisma.organization.create({
            data: {
                Person_ID: person.Person_ID,
                Organization_Name: organizationName,
                Organization_Type: organizationType,
            }
        })
        await prisma.person.update({
            where: {
                Person_ID: person.Person_ID,
            },
            data: {
                Organization_ID: parseInt(org.Organization_ID),
            }
        })
    }
    if (clientName && numberOfEmployees) {
        const client = await prisma.client.create({
            data: {
                Person_ID: person.Person_ID,
                Client_Name: clientName,
                Number_of_Employees: parseInt(numberOfEmployees),
            }
        })
        await prisma.person.update({
            where: {
                Person_ID: person.Person_ID,
            },
            data: {
                Client_ID: parseInt(client.Client_ID),
            }
        })
    }
    
    if (ownerName) {
        const owner = await prisma.owner.create({
            data: {
                Person_ID: person.Person_ID,
                Owner_Name: ownerName,
            }
        })
        await prisma.person.update({
            where: {
                Person_ID: person.Person_ID,
            },
            data: {
                Client_ID: parseInt(owner.Owner_ID),
            }
        })
    }
    
    if (primaryContactName) {
        const primaryContact = await prisma.primary_Contact.create({
            data: {
                Person_ID: person.Person_ID,
                Primary_Contact_Name: primaryContactName,
            }
        })
        await prisma.person.update({
            where: {
                Person_ID: person.Person_ID,
            },
            data: {
                Client_ID: parseInt(primaryContact.Primary_Contact_ID),
            }
        })
    }
    
    if (accountingName && EIN && stateTaxID) {
        const accounting = await prisma.accounting.create({
            data: {
                Person_ID: person.Person_ID,
                Accounting_Name: accountingName,
                EIN: EIN,
                State_Tax_ID: stateTaxID,
            }
        })
        await prisma.person.update({
            where: {
                Person_ID: person.Person_ID,
            },
            data: {
                Accounting_ID: parseInt(accounting.Accounting_ID),
            }
        })
    }
    revalidatePath("/person/add", "page")
}

export default async function PersonCreate() {
    return ( 
        <Fragment>
            <PersonCreateFormWizard 
                handleSubmit={handleSubmit} 
                handleUpdate={handleUpdate} 
                handleUpdateOther={handleUpdateOther}
                handleUpdatePhysical={handleUpdatePhysical}
                handleKeepFormUpdated={handleKeepFormUpdated} 
                handleUpdateOrg={handleUpdateOrg}
                organizations={organizations}
                owners={owners}
                clients={clients}
                accountings={accountings}
                primaryContacts={primaryContacts}
                persons={persons}
                getOrganizations={getOrganizations}
                getOwners={getOwners}
                getClients={getClients}
                getAccounting={getAccounting}
                getPrimaryContacts={getPrimaryContacts}
                getPersons={getPersons}
            />
        </Fragment>
    )
}
