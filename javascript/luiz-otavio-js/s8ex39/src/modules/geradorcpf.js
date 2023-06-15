import { CPFcreate } from "./classcpf";

export default class GeraCPF {
  rand(min = 100000000, max = 999999999) {
    return String(Math.floor(Math.random() * (max - min) + min));
  }

  formatado(cpf) {
    return (cpf.slice(0,3) + "." + cpf.slice(3,6) + "."  + cpf.slice(6,9) + "-" + cpf.slice(9,11));
  }

  gerarNovoCPF() {
    const cpfcalc = new CPFcreate();
    const cpfnovo = this.rand();
    const digito1 = cpfcalc.calculo(0, cpfnovo);
    const digito2 = cpfcalc.calculo(1, cpfnovo + digito1);
    const cpffinal = String(cpfnovo) + String(digito1) + String(digito2);
    return this.formatado(cpffinal);
  }
}
