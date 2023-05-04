function criaPessoa(nome, sobrenome, altura, peso) {
  return {
    nome,
    sobrenome,
    altura,
    peso,
    imc() {
      const calc = this.peso / (this.altura * this.altura);
      return calc.toFixed(2);
    },
    falar(comida) {
      return `${this.nome} gosta de ${comida}.`;
    },
  };
}

const p1 = criaPessoa("Tainá", "Alecrim", 1.6, 76);
const p2 = criaPessoa("Mafalda", "Fairy", 50, 3);
console.log(p1.falar("doces em geral"));
console.log(p2.falar("morder a cocó e passear de carro"));
