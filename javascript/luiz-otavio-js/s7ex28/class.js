class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
  falar(texto) {
    console.log(`${this.nome} está falando sobre ${texto}.`);
  }
  comer(texto) {
    console.log(`${this.nome} está comendo ${texto}.`);
  }
  beber(texto) {
    console.log(`${this.nome} está bebendo ${texto}.`);
  }
}

const p1 = new Pessoa("Denner", "Rubio");
console.log(p1);
p1.falar("a Mafalda");
p1.comer("melancia");
p1.beber("refrigerante");
