const nome = "Denner";
const sobrenome = "Rubio";
const idade = 27;
const peso = 72;
const altura = 1.79;
let imc = peso / (altura * altura).toFixed(2);
let anocalc = new Date();
let ano = anocalc.getFullYear() - idade;

console.log(
  "O meu nome é",
  nome,
  sobrenome,
  ", tenho",
  idade,
  "anos de idade e nasci no ano de",
  ano,
  ". Eu peso",
  peso,
  "e tenho",
  altura,
  "m de altura e meu IMC é",
  imc
);
