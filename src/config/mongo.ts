import "dotenv/config";
import { connect } from "mongoose";

console.log(process.env.DB_URI)

async function dbConnect(): Promise<void> {
    const DB_URI = <string>process.env.DB_URI;
    await connect(DB_URI)
}

export default dbConnect