const mailOptions = {
  host: "",
  port: 123,
  secure: false,
  auth: {
    user: "",
    pass: "",
  },
  tls: { rejectUnauthorized: false },
};

module.exports = mailOptions;
