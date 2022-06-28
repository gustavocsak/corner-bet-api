import request from "supertest";
import app from "../api/app.js";

describe("Predictions testing", () => {
    it("tests /predictions endpoint", async() => {
        const response = await request(app).get("/predictions");
        expect(response.body).toBeDefined();
    })
})