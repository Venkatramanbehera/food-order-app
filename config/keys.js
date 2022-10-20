require("dotenv").config();

module.exports = {
  mongoUrl: process.env.MONGO_DB,
  port: process.env.PORT,
};
