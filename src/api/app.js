import express from "express";
import {db} from "../../db/db.js"
import router from "./routes/index.js"

const app = express();

app.set("json spaces", 40);
app.use(express.json());
app.use(express.urlencoded({extended: true}));

db.on("open", () => {
    console.log("Connected to database!");
    const server = app.listen(process.env.PORT || 3000, () => console.log("Listening..."));
})

app.use('/api/v1', router);
