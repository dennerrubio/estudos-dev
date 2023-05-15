const frutas = ["maça", "pera", "jabuticaba", "abacaxi"];
const alimentos = ["bolacha", "pão", "nuggets"];
const loja = [...frutas, ...alimentos, "cigarro"];

console.log(loja);

const pessoas = [
  { nome: "João", idade: 22 },
  { nome: "Marcela", idade: 18 },
  { nome: "Nathaly", idade: 57 },
  { nome: "Gabriel", idade: 42 },
  { nome: "Athelstan", idade: 82 },
];

const filtroIdade = pessoas.filter((f) => f.idade > 40);
const filtroNome = pessoas.filter((f) => f.nome.length < 5);

console.log(filtroIdade, filtroNome);
