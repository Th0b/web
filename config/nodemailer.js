import nodemailer from "nodemailer";
import Constants from "/constants";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: Constants.PRIMARY_EMAIL_ADDRESS,
    pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD,
  },
});

export const mailOptions = {
  from: {
    name: "Tobiáš Návrat",
    address: Constants.PRIMARY_EMAIL_ADDRESS,
  },
};
