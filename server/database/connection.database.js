const mongoose = require("mongoose");

const connection = async () => {
  try {
    switch (process.env.NODE_ENVIRONMENT) {
      case "TESTING":
        mongoose.connect(process.env.MONGODBCNN_TEST, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });
        break;
      case "DEVELOPMENT":
        mongoose.connect(process.env.MONGODBCNN_DEV, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });
        break;
      case "PRODUCTION":
        mongoose.connect(process.env.MONGODBCNN_PRODUCTION, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });
        break;
      default:
        mongoose.connect(process.env.MONGODBCNN_TEST, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });
    }

    console.log("Base de datos en linea");
  } catch (err) {
    console.log(err);
    throw new Error("Error a la hora de iniciar la base de datos");
  }
};

module.exports = connection;
