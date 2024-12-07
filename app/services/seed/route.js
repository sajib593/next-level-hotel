import { connectDB } from "@/app/lib/connectDB";
import { gymServices } from "@/app/lib/gymServices"; // Import your services array

export const GET = async () => {
  const db = await connectDB();
  const gymCollection = db.collection("gym-collection");

  try {
    // Log the services array to debug issues
    console.log(Array.isArray(gymServices)); // Should print true
    console.log(gymServices);

    // Insert services into the collection
    const resp = await gymCollection.insertMany(gymServices);

    return new Response(JSON.stringify({ message: "Seeded successfully", data: resp }), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(error);

    return new Response(
      JSON.stringify({ message: "Failed to seed data", error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};
