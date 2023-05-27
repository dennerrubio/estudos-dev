class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  get nomeCompleto() {
    return `${this.nome} ${this.sobrenome}`;
  }

  set nomeCompleto(value) {
    value = value.split(" ");
    this.nome = value.shift();
    this.sobrenome = value.join(" ");
  }
}

const p1 = new Pessoa("Denner", "Rubio");
p1.nomeCompleto = "Tainá Alecrim Soares";
console.log(p1.nomeCompleto);
console.log(p1.nome);
console.log(p1.sobrenome);
