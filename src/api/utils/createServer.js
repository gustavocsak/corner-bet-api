import express from "express";
import router from "../routes/index.js"

function createServer() { 
    const app = express();
    app.set("json spaces", 40);
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));

    app.get("/", (req, res) => {
        res.json({"message": "hello"});
    })

    app.use('/api/v1', router);

    return app;
}

export default createServer;
