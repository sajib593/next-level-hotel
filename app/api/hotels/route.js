import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const GET = async () => {
    const db = await connectDB();
    const hotelsCollection = db.collection('hotels')
    try {
        const hotels = await hotelsCollection.find().toArray();
        return new NextResponse(JSON.stringify(hotels), { status: 200 });
    } catch (error) {
        console.log(error)
    }
};

// export const POST = async (request) => {
//     const newProduct = await request.json();
//     const db = await connectDB();
//     await db.collection('products').insertOne(newProduct);
//     return new NextResponse(JSON.stringify({ message: 'Product created' }), { status: 201 });
// };