import { MongoClient, ServerApiVersion } from "mongodb";
const uri = process.env.NEXT_PUBLIC_MONGODB_URL;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version

export const collectionNameObj = {
  servicesCollection: "text_services",
  userCollection: "text_user", 
  bookingCollection : 'test_booking'
};

export default function dbConnect(collectionName) {
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  return client.db("addbolgs").collection(collectionName);
}
