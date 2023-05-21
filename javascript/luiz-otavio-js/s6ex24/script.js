function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}

Pessoa.prototype.nomeCompleto = function () {
  return this.nome + " " + this.sobrenome;
};

const pessoa1 = new Pessoa("Denner", "Rubio");
const pessoa2 = new Pessoa("Tainá", "Alecrim");

const pessoa3 = {
  nome: "Nami",
  sobrenome: "Alecrim",
};

Object.setPrototypeOf(pessoa3, Pessoa.prototype);
