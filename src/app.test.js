/*
 * @Author: yang yu
 * @Date: 2022-01-08 16:39:36
 * @LastEditors: yang yu
 * @LastEditTime: 2022-01-08 16:39:37
 * @Description: file content
 */
const app = require("./app");
const supertest = require("supertest");
const request = supertest(app);

describe("/test endpoint", () => {
  it("should return a response", async () => {
    const response = await request.get("/test");
    expect(response.status).toBe(200);
    expect(response.text).toBe("Hello world");
  });
});
