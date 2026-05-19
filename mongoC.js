import { MongoClient } from "mongodb";

const password = encodeURIComponent(process.env.MONGO_PASSWORD.trim());
const connectionString = `mongodb+srv://sushantvilasshirsath_db_user:${password}@devcluster.lyhzsgg.mongodb.net/?appName=DevCluster&retryWrites=true&w=majority`; // clustore url
// mongodb+srv://sushantvilasshirsath_db_user:<db_password>@devcluster.lyhzsgg.mongodb.net/?appName=DevCluster
const client = new MongoClient(connectionString);
let conn;
try {
  conn = await client.connect();
  console.log("connection successful");
} catch (e) {
  console.error(e);
}
let db = conn.db("integration_ninjas");
export default db;
