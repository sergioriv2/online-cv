const fs = require("fs");
const path = require("path");

const fileName = path.basename(__filename);

let routes = {};

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== fileName && file.slice("-3") === ".js"
    );
  })
  .forEach((file) => {
    const name = file.split(".")[0];
    const pathName = path.join(__dirname, file);
    routes[name] = {
      endpoint: `/api/${name}`,
      route: pathName,
    };
  });

module.exports = {
  routes,
};
