import CPF from "./classcpf";

class GeraCPF {
  rand(min = 100000000, max = 999999999) {
    return String(Math.floor(Math.random() * (max - min) + min));
  }

  gerarNovoCPF() {
    const cpfnovo = new CPF(this.rand);
    return cpfnovo;
  }
}
