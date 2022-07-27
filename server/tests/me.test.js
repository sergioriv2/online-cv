const Me = require("../models/me.model");
const { initialInformation, request, app } = require("./helpers");

describe("'/me' endpoint", () => {
  let token;

  beforeAll(async () => {
    await Me.deleteMany({});
    const newMe = new Me(initialInformation);
    await newMe.save();

    const tokenResponse = await request.post("/api/auth/login").send({
      username: initialInformation.username,
      password: initialInformation.password,
    });

    token = tokenResponse.body.results.token;
  });

  it("should be defined", (done) => {
    expect(request).toBeDefined();
    done();
  });

  describe("* GET /me", () => {
    it("should return the response as json", async () => {
      await request
        .get("/api/me")
        .expect(200)
        .expect("content-type", /application\/json/);
    });

    it("should return my information data", async () => {
      const response = await request.get("/api/me");

      expect(response.body).toMatchObject({
        ok: true,
        results: expect.objectContaining({
          names: expect.objectContaining({
            firstName: expect.any(String),
            lastName: expect.any(String),
          }),
          image: expect.any(String),
          resume: expect.any(String),
          uid: expect.any(String),
          academic_background: expect.arrayContaining([
            expect.objectContaining({
              _id: expect.any(String),
              institution: expect.any(String),
              title: expect.any(String),
              dates: expect.objectContaining({
                start: expect.any(String),
                end: expect.any(String),
              }),
            }),
          ]),
        }),
      });
    });
  });

  describe("* PUT /me", () => {
    it("should return the response as json", async () => {
      await request
        .put("/api/me")
        .expect(200)
        .expect("content-type", /application\/json/)
        .set("X-Api-Key", token);
    });

    describe("-- Send data without any errors", () => {
      it("should update the names", async () => {
        const updatedData = {
          names: {
            firstName: "Sergio",
            lastName: "Rivera",
          },
        };

        const response = await request
          .put("/api/me")
          .send(updatedData)
          .expect(200)
          .set("X-Api-Key", token);

        expect(response.body).toMatchObject({
          ok: true,
          results: expect.objectContaining({
            ...updatedData,
            uid: expect.any(String),
          }),
        });
      });

      it("should update the resume", async () => {
        const updatedData = {
          resume: "resume-path",
        };

        const response = await request
          .put("/api/me")
          .send(updatedData)
          .expect(200)
          .set("X-Api-Key", token);
        expect(response.body).toMatchObject({
          ok: true,
          results: expect.objectContaining({
            ...updatedData,
            uid: expect.any(String),
          }),
        });
      });

      it.skip("should update the image", async () => {
        const updatedData = {
          image: "https://image-url-link.com/",
        };

        const response = await request
          .put("/api/me")
          .send(updatedData)
          .expect(200)
          .set("X-Api-Key", token);
        expect(response.body).toMatchObject({
          ok: true,
          results: expect.objectContaining({
            ...updatedData,
            uid: expect.any(String),
          }),
        });
      });

      it("should update the password", async () => {
        const updatedData = {
          password: "password",
        };

        const response = await request
          .put("/api/me")
          .send(updatedData)
          .expect(200)
          .set("X-Api-Key", token);
        expect(response.body).toMatchObject({
          ok: true,
          results: expect.objectContaining({
            ...updatedData,
            uid: expect.any(String),
          }),
        });
      });

      it.skip("should update the username", async () => {
        const updatedData = {
          username: "username",
        };

        const response = await request
          .put("/api/me")
          .send(updatedData)
          .expect(200)
          .set("X-Api-Key", token);
        expect(response.body).toMatchObject({
          ok: true,
          results: expect.objectContaining({
            ...updatedData,
            uid: expect.any(String),
          }),
        });
      });

      it("should update the academic background", async () => {
        const updatedData = {
          academic_background: [
            {
              institution: "institution",
              title: "title",
              dates: {
                start: new Date(),
                end: new Date(),
              },
            },
          ],
        };

        const response = await request
          .put("/api/me")
          .send(updatedData)
          .expect(200)
          .set("X-Api-Key", token);

        const { results } = response.body;
        const { academic_background } = results;

        expect(academic_background).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              _id: expect.any(String),
              institution: updatedData.academic_background[0].institution,
              title: updatedData.academic_background[0].title,
            }),
          ])
        );
      });
    });

    describe("-- Send data with errors", () => {
      test("don't send a firstname string in the req. body", async () => {
        const response = await request
          .put("/api/me")
          .send({
            names: {
              firstName: true,
            },
          })
          .set("X-Api-Key", token);

        expect(response.body).toContainEqual(
          expect.objectContaining({
            msg: "'firstName' field must be a string.",
            param: "names.firstName",
          })
        );
      });

      test("don't send a lastname string in the req. body", async () => {
        const response = await request
          .put("/api/me")
          .send({
            names: {
              lastName: false,
            },
          })
          .set("X-Api-Key", token);

        expect(response.body).toContainEqual(
          expect.objectContaining({
            msg: "'lastName' field must be a string.",
            param: "names.lastName",
          })
        );
      });

      test("don't send an image URL string in the req. body", async () => {
        const response = await request
          .put("/api/me")
          .send({
            image: "url",
          })
          .set("X-Api-Key", token);

        expect(response.body).toContainEqual(
          expect.objectContaining({
            msg: "'image' field must be an URL.",
            param: "image",
          })
        );
      });

      test("don't send an username string in the req. body", async () => {
        const response = await request
          .put("/api/me")
          .send({
            username: 3.1416,
          })
          .set("X-Api-Key", token);

        expect(response.body).toContainEqual(
          expect.objectContaining({
            msg: "'username' field must be a string.",
            param: "username",
          })
        );
      });

      test("don't send an password string in the req. body", async () => {
        const response = await request
          .put("/api/me")
          .send({
            password: 3.1416,
          })
          .set("X-Api-Key", token);

        expect(response.body).toContainEqual(
          expect.objectContaining({
            msg: "'password' field must be a string.",
            param: "password",
          })
        );
      });

      test("don't send a resume string in the req. body", async () => {
        const response = await request
          .put("/api/me")
          .send({
            resume: false,
          })
          .set("X-Api-Key", token);

        expect(response.body).toContainEqual(
          expect.objectContaining({
            msg: "'resume' field must be a string.",
            param: "resume",
          })
        );
      });

      test("don't send an academic_background array in the req. body", async () => {
        const response = await request
          .put("/api/me")
          .send({
            academic_background: false,
          })
          .set("X-Api-Key", token);

        expect(response.body).toContainEqual(
          expect.objectContaining({
            msg: "'academic_background' field must be an array.",
            param: "academic_background",
          })
        );
      });
    });
  });

  afterAll(async () => {
    await app.closeConnection();
  });
});
