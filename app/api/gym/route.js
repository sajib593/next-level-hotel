
import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const GET = async () => {
    const db = await connectDB();
    const gymCollection = db.collection('gymplan')
    try {
        const gymPlan = await gymCollection.find().toArray();
       
        return new NextResponse(JSON.stringify(gymPlan), { status: 200 });
    } catch (error) {
        console.log(error)
    }
};
