const welcomeEmailTemplate = (userName) => {
  return `
    <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2 style="color: #4CAF50;">Welcome to DevScribe!</h2>
        <p>Hi ${userName},</p>
        <p>We're thrilled to have you join our community. Get ready to explore, create, and share your ideas with like-minded individuals.</p>
        <br/>
        <p>Best regards,<br/>The DevScribe Team</p>
    </div>
    `;
};

module.exports = { welcomeEmailTemplate };
