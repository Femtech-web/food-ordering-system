require("dotenv").config({ path: ".env" });
const nodemailer = require("nodemailer");
const { google } = require("googleapis");

const {
  OAUTH_USER,
  OAUTH_CLIENT_ID,
  OAUTH_CLIENT_SECRET,
  OAUTH_REFRESH_TOKEN,
  OAUTH_REDIRECT_URI,
} = process.env;

async function createTransporter() {
  // Create a new Oauth2Client
  const oauth2Client = new google.auth.OAuth2(
    OAUTH_CLIENT_ID,
    OAUTH_CLIENT_SECRET,
    OAUTH_REDIRECT_URI
  );

  // set the refresh token to your Oauth2Client
  oauth2Client.setCredentials({ refresh_token: OAUTH_REFRESH_TOKEN });

  // Get your access token
  try {
    const accessToken = await new Promise((resolve, reject) => {
      oauth2Client.getAccessToken((err, token) => {
        if (err) {
          reject("Failed to create access token :(");
        }

        resolve(token);
      });
    });

    // create a new transporter with the necessary details of your Oauth2
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        type: "OAuth2",
        user: OAUTH_USER,
        accessToken,
        clientId: OAUTH_CLIENT_ID,
        clientSecret: OAUTH_CLIENT_SECRET,
        refreshToken: OAUTH_REFRESH_TOKEN,
      },
    });

    // To verify if email transport was successful 
    transporter.verify((err, success) => {
      if (err) {
        console.log("Verification error" + err);
        return;
      }
      console.log(`=== Server is ready to take messages: ${success} ===`);
    });

    return transporter;
  } catch (err) {
    console.log("------------------------------------------------");
    console.log(
      OAUTH_USER,
      OAUTH_CLIENT_ID,
      OAUTH_CLIENT_SECRET,
      OAUTH_REFRESH_TOKEN,
      OAUTH_REDIRECT_URI
    );
    console.log("------------------------------------------------");
    console.log(err);
  }
}

const sendEmail = async (emailOptions) => {
  try {
    let emailTransporter = await createTransporter();
    await emailTransporter.sendMail(emailOptions);
  } catch (err) {
    console.log(err);
  }
};

module.exports = sendEmail;
