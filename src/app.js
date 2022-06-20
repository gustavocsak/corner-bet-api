import express from "express";
import {db} from "../db/db.js"
import path, {dirname} from "path";
import { Prediction } from "../db/models/prediction.js";

const app = express();

app.set("json spaces", 40);
app.use(express.json());
app.use(express.urlencoded({extended: true}));

db.on("open", () => {
    console.log("Connected to database!");
    const server = app.listen(process.env.PORT || 3000, () => console.log("Listening..."));
})

// Testing purposes:

app.get("/", (req, res) => {
    Prediction.find({})
        .exec()
        .then((item) => {
            res.status(200).json(item)
        })
        .catch((error) => {
            console.log(error)
            res.status(500).json(error);
        })
})

// const router = require(path.join(__dirname, routes))