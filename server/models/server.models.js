const express = require("express");
const db = require("../database/connection.database");
const cors = require("cors");
const morgan = require("morgan");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.endpoints = {
      projects: "/api/projects",
      images: "/api/images",
      descriptions: "/api/descriptions",
    };

    this.dbConnection();
    this.middlewares();
    this.routes();
  }

  async dbConnection() {
    await db();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(morgan("dev"));
    this.app.use(express.json());
  }

  routes() {
    this.app.use(this.endpoints.projects, require("../routes/projects.routes"));
    this.app.use(this.endpoints.images, require("../routes/images.routes"));
    this.app.use(
      this.endpoints.descriptions,
      require("../routes/descriptions.routes")
    );
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Aplicación en el puerto " + this.port);
    });
  }
}

module.exports = Server;
