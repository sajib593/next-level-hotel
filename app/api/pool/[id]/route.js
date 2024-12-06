import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";


export const GET = async (request, { params }) => {
    const db = await connectDB()
    const poolsCollection = db.collection('pools')
    try {
        const pools = await poolsCollection.findOne({ _id: new ObjectId(params.id) });
        return new Response(JSON.stringify(pools), { status: 200 });
    } catch (error) {
        console.log(error)
    }
}