const MONGO_URL = require("../configs/env").MONGO_URL;
const monsgoose = require("mongoose");

require("dotenv").config();

const connectDB = async () => {
  try {
    await monsgoose.connect(MONGO_URL);
    console.log("MongoDB connected successfully");
  } catch {
    console.log("error connecting to db");
  }
};
module.exports = connectDB;
