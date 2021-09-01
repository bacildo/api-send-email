const express = require("express");

module.exports = () => {
  const app = express();
  const port = 3003;

  app.listen(port, () => console.log(`Server running on port ${port}`));

  return app;
};
