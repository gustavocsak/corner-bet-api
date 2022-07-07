import db from "../../db/db.js"
import createServer from "./utils/createServer.js"
import express from "express";

const app = createServer();

db.on("open", () => {
    console.log("Connected to database!")
    const server = app.listen(process.env.PORT || 3000, () => console.log("Listening. . ."))
})

