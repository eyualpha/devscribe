const transporter = require("../configs/nodemailer");
const { welcomeEmailTemplate } = require("./email.content");
const EMAIL_USER = require("../configs/env").EMAIL_USER;

const sendEmail = async (to, userName, subject) => {
  const mailOptions = {
    from: `"DevScribe" <${EMAIL_USER}>`,
    to: to,
    subject: subject,
    html: welcomeEmailTemplate(userName),
  };
  try {
    await transporter.sendMail(mailOptions);
    console.log(`Email sent to ${to}`);
  } catch (error) {
    console.error(`Error sending email to ${to}:`, error);
  }
};

module.exports = sendEmail;
