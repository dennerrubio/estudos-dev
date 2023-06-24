const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Olá mundo! Hello world!");
});

app.get("/contato", (req, res) => {
  res.send("Esta é a página de contato.");
});

app.listen(3000, () => {
    console.log("Servidor funcionando.")
    console.log("http://localhost:3000")
});
