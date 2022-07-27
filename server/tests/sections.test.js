const Section = require("../models/section.model");
const Me = require("../models/me.model");

const {
  initialSections,
  initialInformation,
  request,
  app,
} = require("./helpers");

describe("'/sections' endpoint", () => {
  let token;
  beforeAll(async () => {
    await Section.deleteMany({});
    const [initialSections1, initialSections2] = initialSections;

    const section1 = new Section(initialSections1);
    const section2 = new Section(initialSections2);

    await section1.save();
    await section2.save();

    // Reset user
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

  describe("* GET /api/projects", () => {
    it("should return the data as a json", async () => {
      await request
        .get("/api/sections")
        .expect(200)
        .expect("content-type", /application\/json/);
    });

    it("should return all the sections", async () => {
      const response = await request.get("/api/sections");

      // Test length
      expect(response.body.results).toHaveLength(initialSections.length);

      // Test object returned
      expect(response.body).toMatchObject({
        ok: true,
        results: expect.arrayContaining([
          expect.objectContaining({
            uid: expect.any(String),
            title: expect.objectContaining({
              es: expect.any(String),
              en: expect.any(String),
            }),
            description: expect.objectContaining({
              es: expect.any(String),
              en: expect.any(String),
            }),
          }),
        ]),
      });
    });
  });

  describe("* POST /api/projects", () => {
    describe("-- Without JWT", () => {
      it("should return an unauthorized response", async () => {
        await request.post("/api/sections/").expect(401);
      });
    });

    it("should post a new section", async () => {
      const newSection = {
        title: {
          es: "Nueva seccion",
          en: "New section",
        },
        description: {
          en: "<p>Welcome to the new section</p>",
          es: "<p>Bienvenido a la nueva sección</p>",
        },
      };

      const updatedSection = await request
        .post("/api/sections/")
        .expect(201)
        .send(newSection)
        .set("X-Api-Key", token);

      const { body: sections } = await request.get("/api/sections");

      expect(updatedSection.body).toMatchObject({
        ok: true,
        results: expect.objectContaining({
          title: newSection.title,
          description: newSection.description,
          uid: expect.any(String),
        }),
      });

      // Check if the length of the collection has changed
      expect(sections.results.length).toBe(initialSections.length + 1);
    });
  });

  describe("* PUT /api/projects", () => {
    describe("-- Without JWT", () => {
      it("should return an unauthorized response", async () => {
        const { body: sectionsResponse } = await request
          .get("/api/sections/")
          .expect(200);
        const [sectionToUpdate] = sectionsResponse.results;

        await request.put("/api/sections/" + sectionToUpdate.uid).expect(401);
      });
    });

    it("should update a section", async () => {
      const updateSection = {
        title: {
          es: "Bienvenidos",
          en: "Bienvenidos",
        },
        description: {
          es: "<p>Lorem ipsum dolor sit amet</p>",
          en: "<p>Lorem ipsum dolor sit amet</p>",
        },
      };

      const { body: sectionsResponse } = await request
        .get("/api/sections/")
        .expect(200);
      const [sectionToUpdate] = sectionsResponse.results;

      const updatedSection = await request
        .put("/api/sections/" + sectionToUpdate.uid)
        .send(updateSection)
        .set("X-Api-Key", token);

      expect(updatedSection.body).toMatchObject({
        ok: true,
        results: expect.objectContaining({
          title: updateSection.title,
          description: updateSection.description,
          uid: expect.any(String),
        }),
      });
    });
  });

  describe("* DELETE /api/projects", () => {
    describe("-- Without JWT", () => {
      it("should return an unauthorized response", async () => {
        const { body: sectionsResponse } = await request
          .get("/api/sections/")
          .expect(200);
        const [sectionToDelete] = sectionsResponse.results;

        await request
          .delete("/api/sections/" + sectionToDelete.uid)
          .expect(401);
      });
    });

    it("should delete a section", async () => {
      const { body: sectionsResponse } = await request
        .get("/api/sections/")
        .expect(200);
      const [sectionToDelete] = sectionsResponse.results;

      const response = await request
        .delete("/api/sections/" + sectionToDelete.uid)
        .set("X-Api-Key", token);

      expect(response.body).toMatchObject({
        ok: true,
        msg: "Deleted successfully.",
      });
    });
  });

  afterAll(async () => {
    await app.closeConnection();
  });
});
