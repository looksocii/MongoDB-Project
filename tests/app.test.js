const request = require("supertest");
const server = require("../src/server");

describe("Testing GET/products Endpoints", () => {
    it("GET/products return Products List", async () => {
        const res = await request(server).get("/products");
        expect(res.statusCode).toEqual(200);
    });
});
