const nome = "Denner";
const sobrenome = "Rubio";
const falanome = (nome, sobrenome) => {
  console.log(nome + " " + sobrenome);
}

exports.falanome = falanome();
exports.nome = nome;
exports.sobrenome = sobrenome;
