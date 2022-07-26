const express = require("express");
const { openCn, closeCn } = require("../database/connection.database");
const cors = require("cors");
const morgan = require("morgan");

const { routes } = require("../routes");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    // this.endpoints = {
    //   projects: "/api/projects",
    //   images: "/api/images",
    //   descriptions: "/api/descriptions",
    // };

    // this.openConnection();
    this.middlewares();
    this.routes();
  }

  async openConnection() {
    await openCn();
  }

  async closeConnection() {
    await closeCn();
  }

  getApp() {
    return this.app;
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(morgan("dev"));
    this.app.use(express.json());
  }

  routes() {
    for (const key of Object.keys(routes)) {
      const { endpoint, route } = routes[key];

      this.app.use(endpoint, require(route));
    }
  }

  listen() {
    if (process.env.NODE_ENV !== "TESTING") {
      this.app.listen(this.port, () => {
        console.log("Aplicación en el puerto " + this.port);
      });
    }
  }
}

module.exports = Server;
