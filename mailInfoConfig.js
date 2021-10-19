const moment = require("moment");
const dataRelatorio = moment().format("DD-MM-YYYY");

const mailInfoConfig = {
  from: "",
  to: ["", ""],
  subject: `Relatórios do Dia ${dataRelatorio}`,
  text: "Olá, segue o resumo detalhado dos eventos diários!",
  attachments: [
    {
      filename: "relatorio",
      path: "./docs/react.pdf",
    },
  ],
};

module.exports = mailInfoConfig;
