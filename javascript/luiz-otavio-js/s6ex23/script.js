function Dados(nome, sobrenome, idade, id) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
  let idNum = id;

  Object.defineProperty(this, "id", {
    enumerable: true,
    configurable: true,
    get: function () {
      return idNum;
    },
    set: function (valor) {
      if (typeof valor !== "number") {
        console.log("Isto não é um número");
        return;
      }
      idNum = valor;
    },
  });
}

const pessoa1 = new Dados("Denner", "Rubio", "26", 7);
const pessoa2 = new Dados("César", "Rubio", "6", "13");
pessoa1.id = "45";
console.log(pessoa1.id);
