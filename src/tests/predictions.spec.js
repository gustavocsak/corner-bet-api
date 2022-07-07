import supertest from "supertest";
import createServer from "../api/start.js"
import db from "../../db/db.js"
import dotenv from "dotenv"
import {MongoClient} from "mongodb"

dotenv.config()
const app = createServer();

MongoClient.connect(process.env.DB_URI, {useNewUrlParser: true}, function(error, client) {
    if(error) {
        console.log(err)
        process.exit(1)
    } 
    console.log("Connected to database . . .")
    const db = client.db("Matches")
})

describe("Predictions testing", () => {

    afterAll((done) => {
        db.close(() => done())
    })
    
    it("tests /predictions endpoint", async() => {
        const response = await supertest(app).get("/api/v1/predictions");
        console.log(response.body)
        expect(response.body).toBeDefined()
    })
})