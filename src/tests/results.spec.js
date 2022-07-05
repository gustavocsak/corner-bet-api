import supertest from "supertest";
import createServer from "../api/start.js"

const app = createServer();

describe("Results testing", () => {
    
    it("tests /results endpoint", async() => {
        const response = await supertest(app).get("/api/v1/results");
        expect(response.body).toBeDefined()
    })
})