const Project = require("../models/project.model");

const { initialProjects, request, app } = require("./helpers");

describe("'/projects' endpoint", () => {
  beforeAll(async () => {
    await Project.deleteMany({});
    const [initialProject1, initialProject2] = initialProjects;

    const project1 = new Project(initialProject1);
    const project2 = new Project(initialProject2);

    await project1.save();
    await project2.save();
  });

  it("should be defined", (done) => {
    expect(request).toBeDefined();
    done();
  });

  it("should return the data as a json", async () => {
    await request
      .get("/api/projects")
      .expect(200)
      .expect("content-type", /application\/json/);
  });

  it("should return all the projects", async () => {
    const response = await request.get("/api/projects");

    // Test length
    expect(response.body.results).toHaveLength(initialProjects.length);

    // Test object returned
    expect(response.body).toMatchObject({
      ok: expect.any(Boolean),
      results: expect.arrayContaining([
        expect.objectContaining({
          uid: expect.any(String),
          title: expect.objectContaining({
            es: expect.any(String),
          }),
          description: expect.objectContaining({
            es: expect.any(String),
            en: expect.any(String),
          }),
          softwares: expect.arrayContaining([expect.any(String)]),
          links: expect.objectContaining({
            repository: expect.any(String),
            deploy: expect.any(String),
          }),
          dates: expect.objectContaining({
            start: expect.any(String),
            end: expect.any(String),
          }),
        }),
      ]),
    });
  });

  it("should update a project", async () => {
    const newProject = {
      title: {
        es: "Proyecto editado 01",
        en: "Edited project 01",
      },
      description: {
        es: "asdasddsa",
        en: "asdasdasd",
      },
      softwares: ["C++, SFML, HTML/CSS, Bootstrap"],
      links: {
        deploy: "https://github.com",
        repository: "https://github.com",
      },
    };

    const { body: projectsResponse } = await request.get("/api/projects/");
    const [projectToUpdate] = projectsResponse.results;

    const updatedProject = await request
      .put("/api/projects/" + projectToUpdate.uid)
      .expect(200)
      .send(newProject);

    expect(updatedProject.body).toMatchObject({
      ok: expect.any(Boolean),
      results: expect.objectContaining({
        uid: expect.any(String),
        title: newProject.title,
        description: newProject.description,
        softwares: newProject.softwares,
        links: newProject.links,
      }),
    });
  });

  it("should post a project", async () => {
    const newProject = {
      title: {
        es: "Nuevo Projecto 03",
        en: "New Project 03",
      },
      description: {
        es: "asdasddsa",
        en: "asdasdasd",
      },
      dates: {
        start: "2022-01-01",
      },
      softwares: ["C++, SFML, HTML/CSS, Bootstrap"],
      links: {
        deploy: "https://github.com",
        repository: "https://github.com",
      },
    };

    const postedProject = await request
      .post("/api/projects/")
      .expect(201)
      .send(newProject);

    expect(postedProject.body).toMatchObject({
      ok: expect.any(Boolean),
      results: expect.objectContaining({
        uid: expect.any(String),
        title: newProject.title,
        description: newProject.description,
        softwares: newProject.softwares,
        links: newProject.links,
      }),
    });

    const { body: projectsResponse } = await request.get("/api/projects/");

    expect(projectsResponse.results.length).toBe(initialProjects.length + 1);
  });

  it("should delete a project", async () => {
    const { body: projectsResponse } = await request.get("/api/projects/");
    const [projectToDelete] = projectsResponse.results;

    const deletedProject = await request
      .delete("/api/projects/" + projectToDelete.uid)
      .expect(200);

    expect(deletedProject.body).toMatchObject({
      ok: expect.any(Boolean),
    });
  });

  afterAll(async () => {
    await app.closeConnection();
  });
});
