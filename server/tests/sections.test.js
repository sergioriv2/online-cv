const Section = require("../models/section.model");

const { initialSections, request, app } = require("./helpers");

describe("'/sections' endpoint", () => {
  beforeAll(async () => {
    await Section.deleteMany({});
    const [initialSections1, initialSections2] = initialSections;

    const section1 = new Section(initialSections1);
    const section2 = new Section(initialSections2);

    await section1.save();
    await section2.save();
  });

  it("should be defined", (done) => {
    expect(request).toBeDefined();
    done();
  });

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

    const { body: sectionsResponse } = await request.get("/api/sections/");
    const [sectionToUpdate] = sectionsResponse.results;

    const updatedSection = await request
      .put("/api/sections/" + sectionToUpdate.uid)
      .send(updateSection);

    expect(updatedSection.body).toMatchObject({
      ok: true,
      results: expect.objectContaining({
        title: updateSection.title,
        description: updateSection.description,
        uid: expect.any(String),
      }),
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
      .send(newSection);

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

  afterAll(async () => {
    await app.closeConnection();
  });
});
