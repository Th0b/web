import nodemailer from "nodemailer";
import Constants from "/constants";

export const transporter = nodemailer.createTransport({
  host: "smtp.seznam.cz",
  port: 465,
  secure: true,
  auth: {
    user: Constants.NOREPLY_EMAIL_ADDRESS,
    pass: process.env.NEXT_PUBLIC_NOREPLY_EMAIL_PASSWORD,
  },
});

export const mailOptions = {
  from: {
    name: "Tobiáš Návrat",
    address: Constants.NOREPLY_EMAIL_ADDRESS,
  },
};
