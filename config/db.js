const mongoose = require("mongoose");
const { mongoUrl } = require("./keys");

const configureDB = async () => {
  try {
    await mongoose.connect(mongoUrl);
    console.log("Connected To DB");
  } catch (error) {
    console.log("Connection Fails");
    process.exit(1);
  }
};

module.exports = configureDB;
