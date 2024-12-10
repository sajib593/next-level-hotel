

// export const GET = async () => {
//     const db = await connectDB();
//     const gymCollection = db.collection('gymplan')
//     try {



        
//         const gymPlan = await gymCollection.findOne({ _id: new ObjectId(params.id) });
//         return new NextResponse(JSON.stringify(gymPlan), { status: 200 });
//     } catch (error) {
//         console.log(error)
//     }
// };

import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";

export const GET = async (request, { params }) => {
    const db = await connectDB()
    const gymCollection = db.collection('gymplan')
    try {
        const gymPlan = await gymCollection.findOne({ _id: new ObjectId(params.id) });
        return new Response(JSON.stringify(gymPlan), { status: 200 });
    } catch (error) {
        console.log(error)
    }
}