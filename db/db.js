import path, {dirname} from "path";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import mongoose from "mongoose";

async function connect() {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    dotenv.config({path: path.join(__dirname, ".env")});

    const mongoDBuri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_KEY}@cluster0.5gryi.mongodb.net/Matches?retryWrites=true&w=majority`;
    
    try {
        mongoose.connect(mongoDBuri);
        console.log("Database connected")
    } catch(error) {
        console.log("Could not connect to database")
        process.exit(1);
    }
}

export default connect;