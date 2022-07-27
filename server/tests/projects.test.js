const Project = require("../models/project.model");
const Me = require("../models/me.model");

const {
  initialProjects,
  request,
  app,
  initialInformation,
} = require("./helpers");

describe("'/projects' endpoint", () => {
  let token;
  beforeAll(async () => {
    await Project.deleteMany({});
    const [initialProject1, initialProject2] = initialProjects;

    const project1 = new Project(initialProject1);
    const project2 = new Project(initialProject2);

    await project1.save();
    await project2.save();

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
        .get("/api/projects")
        .expect(200)
        .expect("content-type", /application\/json/)
        .set("X-Api-Key", token);
    });

    it("should return all the projects", async () => {
      const response = await request.get("/api/projects").expect(200);

      // Test length
      expect(response.body.results).toHaveLength(initialProjects.length);

      // Test object returned
      expect(response.body).toMatchObject({
        ok: true,
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
  });

  describe("* PUT /api/projects", () => {
    describe("-- Without JWT", () => {
      it("should return an unauthorized response", async () => {
        const { body: projectsResponse } = await request
          .get("/api/projects/")
          .expect(200);

        const [projectToUpdate] = projectsResponse.results;

        await request.put("/api/projects/" + projectToUpdate.uid).expect(401);
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

      const { body: projectsResponse } = await request
        .get("/api/projects/")
        .expect(200);

      const [projectToUpdate] = projectsResponse.results;

      const updatedProject = await request
        .put("/api/projects/" + projectToUpdate.uid)
        .expect(200)
        .set("X-Api-Key", token)
        .send(newProject);

      expect(updatedProject.body).toMatchObject({
        ok: true,
        results: expect.objectContaining({
          uid: expect.any(String),
          title: newProject.title,
          description: newProject.description,
          softwares: newProject.softwares,
          links: newProject.links,
        }),
      });
    });
  });

  describe("* POST /api/projects", () => {
    describe("-- Without JWT", () => {
      it("should return an unauthorized response", async () => {
        await request.post("/api/projects/").expect(401);
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
        images: {
          original: "http://project-image-01.com",
        },
        links: {
          deploy: "https://github.com",
          repository: "https://github.com",
        },
      };

      const postedProject = await request
        .post("/api/projects/")
        .expect(201)
        .send(newProject)
        .set("X-Api-Key", token);

      expect(postedProject.body).toMatchObject({
        ok: true,
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
  });

  describe("* DELETE /api/projects", () => {
    describe("-- Without JWT", () => {
      it("should return an unauthorized response", async () => {
        const { body: projectsResponse } = await request.get("/api/projects/");
        const [projectToDelete] = projectsResponse.results;

        await request
          .delete("/api/projects/" + projectToDelete.uid)
          .expect(401);
      });
    });

    it("should delete a project", async () => {
      const { body: projectsResponse } = await request.get("/api/projects/");
      const [projectToDelete] = projectsResponse.results;

      const deletedProject = await request
        .delete("/api/projects/" + projectToDelete.uid)
        .expect(200)
        .set("X-Api-Key", token);

      expect(deletedProject.body).toMatchObject({
        ok: true,
      });
    });
  });

  afterAll(async () => {
    await app.closeConnection();
  });
});
