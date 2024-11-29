import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";


export const GET = async (request, { params }) => {
    const db = await connectDB()
    const hotelsCollection = db.collection('hotels')
    try {
        const hotel = await hotelsCollection.findOne({ _id: new ObjectId(params.id) });
        return new Response(JSON.stringify(hotel), { status: 200 });
    } catch (error) {
        console.log(error)
    }
}