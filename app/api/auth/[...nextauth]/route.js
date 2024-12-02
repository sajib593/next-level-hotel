import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcryptjs';
import { connectDB } from "@/lib/connectDB";

const handler = NextAuth({
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60, // 30 days
    },
    providers: [
        CredentialsProvider({
            credentials: {
                email: {},
                password: {},
            },
            async authorize(credentials) {
                const { email, password } = credentials;

                // Basic validation
                if (!email || !password) {
                    console.log("Email or Password missing");
                    return null;
                }

                // Connect to database
                const db = await connectDB();
                const currentUser = await db.collection("users").findOne({ email });

                // User not found
                if (!currentUser) {
                    console.log("User not found");
                    return null;
                }

                // Compare hashed password
                const passwordMatched = await bcrypt.compare(password, currentUser.password);
                if (!passwordMatched) {
                    console.log("Incorrect password");
                    return null;
                }

                // Return the user if authentication is successful
                return currentUser;
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                // Add user details to the JWT token
                token.id = user._id;
                token.email = user.email;
                token.name = user.name; // Example, if you want to include the name in the token
                // Add other user details if needed (e.g., role, etc.)
            }
            return token;
        },
        async session({ session, token }) {
            if (token) {
                // Attach user details to the session object
                session.user.id = token.id;
                session.user.email = token.email;
                session.user.name = token.name; // Example: include name in session
                // Add other user details as needed
            }
            return session;
        },
    },
    pages: {
        signIn: "/login", // Custom login page
    },
});

export { handler as GET, handler as POST };
