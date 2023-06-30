const express = require("express");
const route = express.Router();
const homeControl = require("./src/controllers/homeControl");
const contatoControl = require("./src/controllers/contatoControl");

route.get("/", middle, homeControl.paginainicial);

route.get("/contato/:iduser?", middle, contatoControl.paginainicial);

function middle(req, res, next) {
    console.log("Eu passei por aqui");
    next();
  };
  

module.exports = route;
