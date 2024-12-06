import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const GET = async () => {
    const db = await connectDB();
    const poolUserCollection = db.collection('pool-book')
    try {
        const poolBook = await poolUserCollection.find().toArray();
        return new NextResponse(JSON.stringify(poolBook), { status: 200 });
    } catch (error) {
        console.log(error)
    }
};