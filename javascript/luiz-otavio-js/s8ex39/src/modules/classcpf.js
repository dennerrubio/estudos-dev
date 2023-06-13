export default class CPF {
  constructor(cpfInicial) {
    this.cpfInicial = cpfInicial;
    this.cpfLimpo = "";
    this.cpfArray = "";
    this.validarCPF();
  }

  validarCPF() {
    this.limparCPF();
    this.calculo(0);
    this.calculo(1);
    this.comparativo();
  }

  limparCPF() {
    this.cpfLimpo = this.cpfInicial.replace(/\D+/g, "");
    this.cpfArray = Array.from(this.cpfLimpo);
  }

  calculo(value) {
    let calc = 0;
    for (let i = 0; i < 9 + value; i++) {
      calc += this.cpfArray[i] * (10 + value - i);
    }
    const digito = 11 - (calc % 11);
    if (digito > 9) {
      this.cpfArray.push("0");
    } else {
      this.cpfArray.push(String(digito));
    }
  }

  comparativo() {
    const somaArray = this.cpfArray.reduce((a, b) => a + b);
    if (somaArray === this.cpfLimpo) {
      return console.log("Seu CPF é válido.");
    } else {
      return console.log("Este CPF não existe.");
    }
  }
}
