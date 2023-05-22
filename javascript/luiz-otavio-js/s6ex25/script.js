function Produto(item, preco) {
  this.item = item;
  this.preco = preco;
}

Produto.prototype.aumento = function (quantia) {
  this.preco += quantia;
};

Produto.prototype.desconto = function (quantia) {
  this.preco -= quantia;
};

const videogame = new Produto("videogame", 1500);
videogame.aumento(250);
console.log(videogame);

function Carro(item, preco, cor) {
  Produto.call(this, item, preco);
  this.cor = cor;
}

Carro.prototype = Object.create(Produto.prototype);
Carro.prototype.constructor = Carro;

const civic = new Carro("Civic", 25000, "Cinza");

civic.aumento(500);
console.log(civic);
