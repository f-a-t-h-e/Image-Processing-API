import supertest from "supertest";
import app from "../../../index";

const request = supertest(app);
describe("Test endpoint of images api", () => {
  it("gets the fjord.jpg", async () => {
    const response = await request.get("/api/images/?name=fjord");
    expect(response.status).toBe(200);
  });
});
