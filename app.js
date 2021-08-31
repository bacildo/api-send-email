const express = require("express");
const nodemailer = require("nodemailer");
require("dotenv").config();
const moment = require("moment");
const dataRelatorio = moment().format("DD-MM-YYYY");

const app = express();

const port = 3003;

const user = process.env.ADDRESS_MAIL;
const password = process.env.PASSWORD;

app.get("/", (req, res) => res.send());

app.get("/send", (req, res) => {
  const transporter = nodemailer.createTransport({
    host: "",
    port: "",
    auth: { user, password },
  });

  transporter
    .sendMail({
      from: user,
      to: user,
      subject: `Relatórios do Dia${dataRelatorio}`,
      text: "Olá, segue o resumo detalhado dos eventos diários!",
    })
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.send(error);
    });
});

app.listen(port, () => console.log(`Server running on port ${port}`));
