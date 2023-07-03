const mongoose = require("mongoose");

const HomeSchema = new mongoose.Schema({
  titulo: { type: String, requires: true },
  descricao: String,
});

const homeModel = mongoose.model("Home", HomeSchema);

module.exports = homeModel;
