// External Imports
import nodemailer from "nodemailer";

// Internal Imports
import {
  EMAIL_HOST,
  EMAIL_PASS,
  EMAIL_PORT,
  EMAIL_UN_AUTH,
  EMAIL_USER,
} from "../config/config.js";

export const sendEmail = (EmailTo, EmailSubject, EmailText) => {
  // create email transporter
  const transporter = nodemailer.createTransport({
    host: EMAIL_HOST,
    port: EMAIL_PORT,
    secure: EMAIL_UN_AUTH,
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS,
    },
  });

  // Define Email Options
  const mailOption = {
    from: EMAIL_USER,
    to: EmailTo,
    subject: EmailSubject,
    text: EmailText,
  };

  // Send Email
  transporter.sendMail(mailOption, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log(`Email sent: ${info.response}`);
    }
  });
};
