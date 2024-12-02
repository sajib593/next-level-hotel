import { connectDB } from "@/lib/connectDB";
import bcrypt from "bcryptjs";  // Import bcryptjs for password hashing
import { NextResponse } from "next/server";

export const POST = async (request) => {
    const newUser = await request.json();

    try {
        const db = await connectDB();
        const userCollection = db.collection('users');

        // Check if the user already exists
        const exist = await userCollection.findOne({ email: newUser.email });
        if (exist) {
            // User already exists
            console.log("User already exists:", newUser.email);
            return NextResponse.json({ message: "User Exists" }, { status: 409 });  // Use 409 for conflict
        }

        // Hash the password before saving it to the database
        const hashedPassword = await bcrypt.hash(newUser.password, 10); // 10 salt rounds
        const userWithHashedPassword = {
            ...newUser,
            password: hashedPassword  // Store the hashed password instead of the plain password
        };

        // Insert the new user with the hashed password
        await userCollection.insertOne(userWithHashedPassword);

        return new NextResponse(JSON.stringify({ message: "User Created" }), { status: 200 });

    } catch (error) {
        console.error("Error during user creation:", error);
        return new NextResponse(JSON.stringify({ message: "Something went wrong" }), { status: 500 });
    }
}
