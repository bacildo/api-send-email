const serverExpress = require("./server");
const nodemailer = require("nodemailer");
const mailOptions = require("./config");
const mailInfoConfig = require("./mailInfoConfig");

const app = serverExpress();

app.get("/", (req, res) => res.send("conectado"));

app.get("/send", (req, res) => {
  const transporter = nodemailer.createTransport({
    host: mailOptions.host,
    port: mailOptions.port,
    secure: mailOptions.secure,
    auth: mailOptions.auth,
    tls: mailOptions.tls,
  });

  transporter
    .sendMail({
      from: mailInfoConfig.from,
      to: mailInfoConfig.to,
      subject: mailInfoConfig.subject,
      text: mailInfoConfig.text,
      attachments: mailInfoConfig.attachments,
    })
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.send(error);
    });

  transporter.verify(function (error) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent!");
    }
  });
});
