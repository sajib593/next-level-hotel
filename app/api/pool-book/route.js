import { connectDB } from "@/lib/connectDB";

export const POST = async (request) => {
  const poolBooking = await request.json();
  const db = await connectDB();
  const poolCollection = db.collection("pool-book");
  try {
    const res = await poolCollection.insertOne(poolBooking);
    return new Response(JSON.stringify({ message: "Added Successfully" }), {
    
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Something Went Wrong" }), {
     
    });
  }
};