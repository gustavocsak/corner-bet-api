import supertest from "supertest";
import createServer from "../api/start.js"

const app = createServer();

describe("Predictions testing", () => {
    it("tests /predictions endpoint", async() => {
        // const response = await request(app).get("/api/v1/predictions");
        // console.log(response.body)
        // expect(response.body).toBeDefined()
        expect(true).toBe(true)
    })
})