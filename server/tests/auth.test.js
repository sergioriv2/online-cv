const Me = require("../models/me.model");
const { initialInformation, request, app } = require("./helpers");

describe("'/auth' endpoint", () => {
  beforeAll(async () => {
    await Me.deleteMany({});
    const newMe = new Me(initialInformation);

    await newMe.save();
  });

  it("should be defined", (done) => {
    expect(request).toBeDefined();
    done();
  });

  describe("-- Send data without any errors", () => {
    it("should return the token", async () => {
      const loginRequest = {
        username: "serivera",
        password: "lorem",
      };

      const response = await request
        .post("/api/auth/login")
        .send(loginRequest)
        .expect(200);

      expect(response.body).toMatchObject({
        ok: true,
        results: expect.objectContaining({
          token: expect.any(String),
        }),
      });
    });

    it("should return a bad request response", async () => {
      const loginRequest = {
        username: "serivera",
        password: "abc123",
      };

      const response = await request
        .post("/api/auth/login")
        .send(loginRequest)
        .expect(400);

      expect(response.body).toMatchObject({
        ok: false,
        msg: "Bad Request",
      });
    });

    it("should return a not found response", async () => {
      const loginRequest = {
        username: "abc123",
        password: "abc123",
      };

      const response = await request
        .post("/api/auth/login")
        .send(loginRequest)
        .expect(404);

      expect(response.body).toMatchObject({
        ok: false,
        msg: "Not found.",
      });
    });
  });

  describe("-- Send data with errors", () => {
    test("don't send an username in the req. body", async () => {
      const loginRequest = {
        password: "abc123",
      };

      const response = await request
        .post("/api/auth/login")
        .send(loginRequest)
        .expect(400);

      expect(response.body).toContainEqual(
        expect.objectContaining({
          msg: "'username' field is required.",
          param: "username",
        })
      );
    });

    test("don't send an username string in the req. body", async () => {
      const loginRequest = {
        password: true,
      };

      const response = await request
        .post("/api/auth/login")
        .send(loginRequest)
        .expect(400);

      expect(response.body).toContainEqual(
        expect.objectContaining({
          msg: "'username' field must be a string.",
          param: "username",
        })
      );
    });

    test("don't send a password in the req. body", async () => {
      const loginRequest = {
        username: "abc123",
      };

      const response = await request
        .post("/api/auth/login")
        .send(loginRequest)
        .expect(400);

      expect(response.body).toContainEqual(
        expect.objectContaining({
          msg: "'password' field is required.",
          param: "password",
        })
      );
    });

    test("don't send a string password in the req. body", async () => {
      const loginRequest = {
        username: false,
      };

      const response = await request
        .post("/api/auth/login")
        .send(loginRequest)
        .expect(400);

      expect(response.body).toContainEqual(
        expect.objectContaining({
          msg: "'password' field must be a string.",
          param: "password",
        })
      );
    });
  });

  afterAll(async () => {
    await app.closeConnection();
  });
});
