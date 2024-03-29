require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose
  .connect(process.env.CONNECTIONSTRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Conectado com sucesso.");
    app.emit("Pronto");
  })
  .catch((e) => console.log(e));
const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require("connect-flash");
const route = require("./routes");
const path = require("path");
app.use(express.static(path.resolve(__dirname, "public")));
app.use(route);
const sessionOptions = session({
  secret: "its a secret",
  store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: trye,
  },
});
app.set("views", path.resolve(__dirname, "src", "views"));
app.set("view engine", "ejs");

app.on("Pronto", () => {
  app.listen(3000, () => {
    console.log("Servidor funcionando.");
    console.log("http://localhost:3000");
  });
});
