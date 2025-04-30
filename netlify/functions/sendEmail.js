import nodemailer from "nodemailer";
import Busboy from "busboy";
import dotenv from "dotenv";

dotenv.config();

export const handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: "Method Not Allowed",
    };
  }

  return new Promise((resolve, reject) => {
    const busboy = Busboy({ headers: event.headers });
    const fields = {};
    const attachments = [];

    busboy.on("file", (fieldname, file, fileInfo) => {
      // Extract filename and mimetype from fileInfo
      const { filename, mimeType } = fileInfo;
      let buffer = Buffer.alloc(0);

      // Collect the file data
      file.on("data", (data) => {
        buffer = Buffer.concat([buffer, data]);
      });

      file.on("end", () => {
        // Correctly structure the attachment for nodemailer
        attachments.push({
          filename: filename,
          content: buffer,
          contentType: mimeType, // Add the correct MIME type
          encoding: 'base64'
        });
      });
    });

    busboy.on("field", (fieldname, value) => {
      fields[fieldname] = value;
    });

    busboy.on("finish", async () => {
      const { email, message } = fields;

      if (!email || !message) {
        return resolve({
          statusCode: 400,
          body: JSON.stringify({ error: "All fields are required" }),
        });
      }

      try {
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASS,
          },
        });

        const mailOptions = {
          from: process.env.EMAIL,
          to: process.env.EMAIL,
          subject: "Email notification from website",
          text: message,
          replyTo: email,
          attachments: attachments, // Pass the correctly structured attachments
        };

        console.log("Sending email with attachments:", 
          attachments.map(a => ({ filename: a.filename, size: a.content.length })));

        const info = await transporter.sendMail(mailOptions);
        console.log("Email sent:", info);

        return resolve({
          statusCode: 200,
          body: JSON.stringify({ success: true, message: "Email sent successfully!" }),
        });
      } catch (err) {
        console.error("Error sending email:", err);
        return resolve({
          statusCode: 500,
          body: JSON.stringify({ error: "Failed to send email", details: err.message }),
        });
      }
    });

    // Handle base64 encoded body or regular body
    let bodyData;
    if (event.isBase64Encoded) {
      bodyData = Buffer.from(event.body, "base64");
    } else {
      bodyData = Buffer.from(event.body);
    }
    
    busboy.end(bodyData);
  });
};