const monsgoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    await monsgoose.connect(process.env.MONGO_URL);
    console.log("MongoDB connected successfully");
  } catch {
    console.log("error connecting to db");
  }
};
module.exports = connectDB;
