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

module.exports = { initialSections, request, app };
