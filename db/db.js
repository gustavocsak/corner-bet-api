import path, {dirname} from "path";
import dotenv from "dotenv";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

dotenv.config({path: path.resolve(__dirname, '.env')});

import mongoose from "mongoose";

let mongoDB = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_KEY}@cluster0.5gryi.mongodb.net/Matches?retryWrites=true&w=majority`;

mongoose.connect(mongoDB);
export const db = mongoose.connection;