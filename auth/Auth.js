import CredentialsProvider from "next-auth/providers/credentials"
import { PrismaClient } from "@prisma/client"
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient()
export const authOptions = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: "Email", type: "text", placeholder: "milescatlett@gmail.com" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                console.log(credentials)
                const person = await prisma.person.findFirst({
                    where: {
                        Email: {
                            equals: credentials.email
                        },
                    }
                })
                const compare = await bcrypt.compare(credentials.password, person.Password);
                if (compare) {
                    return person
                }
                return null
            },
        })
    ],
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async jwt ({ token, user, session }) {
            if (user) {
                token.id = user.Person_ID
                token.email = user.Email
                return {
                    ...token,
                    id: user.Person_ID,
                    email: user.Email,
                }
            }
            return token
        },
        async session ({ session, token, user }) {
            return {
                ...session,
                user: {
                    ...session.user,
                    id: token.id,
                    email: token.email,
                }
            }
        },
    },
}