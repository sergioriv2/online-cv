require("dotenv").config();

const Server = require("./models/server.model");

const app = new Server();

app.openConnection().then(() => {
  app.listen();
});

exports.module = app;
