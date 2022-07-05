import connect from "../../db/db.js"
import createServer from "./start.js"
import express from "express";

const app = createServer();

app.listen(3000, async() => {
    console.log("Listening...");
    await connect();
})


