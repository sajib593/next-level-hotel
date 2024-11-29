import { MongoClient, ServerApiVersion } from "mongodb";

let db;
export const connectDB = async () => {
    if (db) return db;
    try {
        const uri = 'mongodb+srv://hotel_guests:rqLRdUn3CmlnfYTB@cluster0.0b46zlg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
        const client = new MongoClient(uri, {
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true,
            }
        })
        db = client.db('hotel-management')
        return db
    }
    catch (error) {
        console.log(error)
    }
}