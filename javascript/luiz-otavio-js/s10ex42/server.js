const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Olá mundo! Hello world!");
});

app.get("/contato/:iduser?", (req, res) => {
  res.send(req.params.iduser);
  console.log(req.params);
});

app.listen(3000, () => {
  console.log("Servidor funcionando.");
  console.log("http://localhost:3000");
});
