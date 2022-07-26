require("dotenv").config();

const Server = require("./models/server.models");

const app = new Server();

// app.openConnection().then(() => {
//   app.listen();
// });

exports.module = app;
