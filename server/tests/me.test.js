const Me = require("../models/me.model");

const { initialInformation, request, app } = require("./helpers");

describe("'/me' endpoint", () => {
  beforeAll(async () => {
    await Me.deleteMany({});
    const newMe = new Me(initialInformation);

    await newMe.save();
  });

  it("should be defined", (done) => {
    expect(request).toBeDefined();
    done();
  });

  it("should return my information as json", async () => {
    await request
      .get("/api/me")
      .expect(200)
      .expect("content-type", /application\/json/);
  });

  it("should return my information data", async () => {
    const response = await request.get("/api/me");
    expect(response.body).toMatchObject({
      ok: expect.any(Boolean),
      results: expect.objectContaining({
        names: expect.objectContaining({
          firstName: expect.any(String),
          lastName: expect.any(String),
        }),
        image: expect.any(String),
        resume: expect.any(String),
        uid: expect.any(String),
        // academic_background: expect.arrayContaining([
        //   expect.objectContaining({
        //     _id: expect.any(String),
        //     institution: expect.any(String),
        //     title: expect.any(String),
        //     dates: expect.objectContaining({
        //       start: expect.any(Date),
        //       end: expect.any(Date),
        //     }),
        //   }),
        // ]),
      }),
    });
  });

  it("should update my information", async () => {
    const response = await request.put("/api/me").send({
      resume: "https://resume-path.com",
      fName: "Sergio",
      lName: "Rivera",
    });

    expect(response.body).toMatchObject({
      ok: expect.any(Boolean),
      results: expect.objectContaining({
        names: expect.objectContaining({
          firstName: "Sergio",
          lastName: "Rivera",
        }),
        resume: "https://resume-path.com",
        uid: expect.any(String),
        username: expect.any(String),
      }),
    });
  });

  afterAll(async () => {
    await app.closeConnection();
  });
});
