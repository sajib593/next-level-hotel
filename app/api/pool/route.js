import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const GET = async () => {
    const db = await connectDB();
    const poolsCollection = db.collection('pools')
    try {
        const pools = await poolsCollection.find().toArray();
        return new NextResponse(JSON.stringify(pools), { status: 200 });
    } catch (error) {
        console.log(error)
    }
};