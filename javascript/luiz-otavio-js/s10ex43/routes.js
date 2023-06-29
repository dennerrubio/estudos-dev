const express = require("express");
const route = express.Router();
const homeControl = require("./src/controllers/homeControl");
const contatoControl = require("./src/controllers/contatoControl");

route.get("/", homeControl.paginainicial);

route.get("/contato/:iduser?", contatoControl.paginainicial);

module.exports = route;
