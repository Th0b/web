import { mailOptions, transporter } from "../../config/nodemailer";
import Constants from "/constants";
import fs from "fs";
import path from "path";
import ejs from "ejs";

const loadAndRenderTemplate = (templateFile, replacements) => {
  const templatePath = path.join(process.cwd(), "/html/" + templateFile);
  const template = fs.readFileSync(templatePath, "utf-8");
  const templateContent = ejs.render(template, replacements);
  return templateContent;
};

const sendEmail = async (to, subject, html) => {
  await transporter.sendMail({
    ...mailOptions,
    to,
    subject,
    html,
    attachments: [
      {
        filename: "logo.png",
        path: path.join(process.cwd(), "/public/logo.png"),
        cid: "logo",
      },
    ],
  });
};

const handler = async (request, response) => {
  try {
    if (request.method != "POST") {
      throw new Error("Request is not POST method");
    }

    const data = request.body;

    const { firstName, lastName, email, subject, message } = data;

    if (!firstName && !lastName && !email && !subject && !message) {
      throw new Error(
        "Request requires first name, last name, email, subject and message"
      );
    }

    const replacements = {
      subject,
      firstName,
      lastName,
      email,
      message,
    };

    const myEmailContent = loadAndRenderTemplate(
      "myEmailTemplate.html",
      replacements
    );

    const senderEmailContent = loadAndRenderTemplate(
      "senderEmailTemplate.html",
      replacements
    );

    const senderEmail = email;
    const myEmail = Constants.SECONDARY_EMAIL_ADDRESS;

    const myEmailSubject = "Webový formulář - " + subject;
    const senderEmailSubject = "Potvrzení o odeslání formuláře - " + subject;

    await sendEmail(myEmail, myEmailSubject, myEmailContent);
    await sendEmail(senderEmail, senderEmailSubject, senderEmailContent);

    response.status(200).json({ message: "Form was successfully sent" });
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: error });
  }
};

export default handler;
