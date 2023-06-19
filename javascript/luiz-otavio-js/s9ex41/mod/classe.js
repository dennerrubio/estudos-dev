module.exports = class Gato {
  constructor(nome, cor) {
    this.nome = nome;
    this.cor = cor;
  }

  miar() {
    return `${this.nome} da cor ${this.cor} está miando.`;
  }
};
