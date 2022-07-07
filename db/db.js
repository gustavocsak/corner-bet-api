import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const mongoDBuri = process.env.DB_URI
mongoose.connect(mongoDBuri)

let db = mongoose.connection

export default db;