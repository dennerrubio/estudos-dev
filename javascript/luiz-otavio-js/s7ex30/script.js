class Produto {
  constructor(id, nome, cor) {
    this.id = id;
    this.nome = nome;
    this.cor = cor;
    this.ligado = false;
  }

  get ligar() {
    if (this.ligado === true) {
      console.log("Já está ligado.");
      return;
    }
    this.ligado = true;
    console.log("Click! Estou ligado.");
  }

  get desligar() {
    if (this.ligado === false) {
      console.log("Já está desligado.");
      return;
    }
    this.ligado = false;
    console.log("Click! Desliguei.");
  }
}

class Smartphone extends Produto {
  constructor(id, nome, cor) {
    super(id, nome, cor);
  }
}

const celular = new Smartphone(793, "Galaxy S20", "Cinza Chumbo");
console.log(celular);
celular.ligar;
celular.desligar;
celular.desligar;
