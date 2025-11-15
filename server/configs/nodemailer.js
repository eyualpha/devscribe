const nodemailer = require("nodemailer");
const { EMAIL_USER, EMAIL_PASSWORD } = require("./env");

const transporter = nodemailer.createTransport({
  service: "Gmail",
  port: 465,
  secure: true,
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASSWORD,
  },
});
module.exports = transporter;
