import nodemailer from "nodemailer";
import Busboy from "busboy";

export const handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: { "Access-Control-Allow-Origin": "*" },
      body: "Method Not Allowed",
    };
  }

  return new Promise((resolve) => {
    const busboy = Busboy({ headers: event.headers });
    const fields = {};
    const attachments = [];

    busboy.on("file", (fieldname, file, fileInfo) => {
      const { filename, mimeType } = fileInfo;
      let buffer = Buffer.alloc(0);

      file.on("data", (data) => {
        if (buffer.length + data.length > 5 * 1024 * 1024) {
          file.destroy(new Error("File too large (max 5MB)"));
          return;
        }
        buffer = Buffer.concat([buffer, data]);
      });

      file.on("end", () => {
        attachments.push({
          filename,
          content: buffer,
          contentType: mimeType,
        });
      });

      file.on("error", (err) => {
        console.error("File error:", err);
      });
    });

    busboy.on("field", (fieldname, value) => {
      fields[fieldname] = value;
    });

    busboy.on("finish", async () => {
      try {
        const transporter = nodemailer.createTransport({
          host: "smtp.gmail.com",
          port: 465,
          secure: true,
          auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASS,
          },
        });

        const mailOptions = {
          from: process.env.EMAIL,
          to: process.env.EMAIL,
          subject: "New message from website",
          text: `From: ${fields.email}\n\n${fields.message}`,
          replyTo: fields.email,
          attachments,
        };

        await transporter.sendMail(mailOptions);
        
        resolve({
          statusCode: 200,
          headers: { "Access-Control-Allow-Origin": "*" },
          body: JSON.stringify({ message: "Email sent!" }),
        });
      } catch (err) {
        console.error("Error:", err);
        resolve({
          statusCode: 500,
          headers: { "Access-Control-Allow-Origin": "*" },
          body: JSON.stringify({ error: err.message }),
        });
      }
    });

    busboy.end(
      event.isBase64Encoded
        ? Buffer.from(event.body, "base64")
        : Buffer.from(event.body)
    );
  });
};