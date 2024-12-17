import { Db, MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI || "";

if (!uri) {
  throw new Error("Please add your MongoDB connection string to .env");
}

let cachedClient: MongoClient;
let cachedDbs: { [key: string]: Db } = {};

export async function connectToDatabase(dbName: string = "qrcode") {
  try {
    if (cachedClient && cachedDbs[dbName]) {
      return {
        client: cachedClient,
        db: cachedDbs[dbName],
      };
    }

    if (!cachedClient) {
      cachedClient = new MongoClient(uri);
      await cachedClient.connect();
    }

    let db = cachedClient.db(dbName);
    cachedDbs[dbName] = db;

    return {
      client: cachedClient,
      db: cachedDbs[dbName],
    };
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    throw new Error("Database connection failed");
  }
}
