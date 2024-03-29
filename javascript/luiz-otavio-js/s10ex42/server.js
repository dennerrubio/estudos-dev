const express = require("express");
const app = express();
const route = require("./routes");
const path = require("path");
app.use(express.static(path.resolve(__dirname, "public")));
app.use(route);
app.set("views", path.resolve(__dirname, "src", "views"));
app.set("view engine", "ejs");

app.listen(3000, () => {
  console.log("Servidor funcionando.");
  console.log("http://localhost:3000");
});
