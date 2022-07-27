const supertest = require("supertest");
const Server = require("../models/server.model");

const app = new Server();
app.openConnection();

const request = supertest(app.getApp());

const initialSections = [
  {
    title: {
      es: "Lorem",
      en: "Lorem",
    },
    description: {
      es: "<p>Lorem</p>",
      en: "<p>Lorem</p>",
    },
  },
  {
    title: {
      es: "Lorem 2",
      en: "Lorem 2",
    },
    description: {
      es: "<p>Lorem 2</p>",
      en: "<p>Lorem 2</p>",
    },
  },
];

const initialProjects = [
  {
    title: {
      es: "Titulo de proyecto 01",
      en: "Project title 01",
    },
    description: {
      es: "Descripcion de proyecto 01",
      en: "Project description 01",
    },
    dates: {
      start: new Date(),
      end: new Date(),
    },
    softwares: ["MERN Stack, Jira, Slack"],
    images: [
      {
        thumbnail: "http://image-thumbnail-01.com",
        original: "http://image-original-01.com",
      },
      {
        thumbnail: "http://image-thumbnail-02.com",
        original: "http://image-original-02.com",
      },
    ],
    links: {
      repository: "https://repo-01.com",
      deploy: "https://deploy-01.com",
    },
  },
  {
    title: {
      es: "Titulo de proyecto 02",
      es: "Project title 02",
    },
    description: {
      es: "Descripcion de proyecto 02",
      en: "Project description 02",
    },
    dates: {
      start: new Date(),
      end: new Date(),
    },
    softwares: ["MERN Stack, Jira, Slack"],
    images: [
      {
        thumbnail: "http://image-thumbnail-1.com",
        original: "http://image-original-1.com",
      },
      {
        thumbnail: "http://image-thumbnail-2.com",
        original: "http://image-original-2.com",
      },
    ],
    links: {
      repository: "https://repo-02.com",
      deploy: "https://deploy-02.com",
    },
  },
];

const initialInformation = {
  names: {
    firstName: "lorem",
    lastName: "lorem",
  },
  username: "serivera",
  password: "lorem",
  image: "lorem",
  resume: "lorem",
  academic_background: [
    {
      institution: "lorem",
      title: "lorem",
      dates: {
        start: new Date(),
        end: new Date(),
      },
    },
  ],
};

module.exports = {
  initialSections,
  initialInformation,
  initialProjects,
  request,
  app,
};
