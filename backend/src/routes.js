const express = require("express");
const routes = express.Router();

routes.get("/", (req, resp) => {
  return resp.json({ msg: "Hello World" });
});

module.exports = routes;
