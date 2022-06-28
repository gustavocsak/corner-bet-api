import app from "./app";
import {db} from "../../db/db.js"

db.on("open", () => {
    console.log("Connected to database!");
    const server = app.listen(process.env.PORT || 3000, () => console.log("Listening..."));
})