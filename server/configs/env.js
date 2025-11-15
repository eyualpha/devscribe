require("dotenv").config();

module.exports = {
  PORT: process.env.PORT || 5000,
  MONGO_URL: process.env.MONGO_URL,
  JWT_SECRET: process.env.JWT_SECRET,
  EMAIL_USER: process.env.EMAIL_ACCOUNT,
  EMAIL_PASSWORD: process.env.EMAIL_PASSWORD,
};
