const pessoas = [
  { nome: "João", idade: 22 },
  { nome: "Marcela", idade: 18 },
  { nome: "Nathaly", idade: 57 },
  { nome: "Gabriel", idade: 42 },
  { nome: "Athelstan", idade: 82 },
];

const nomes = pessoas.map((n) => n.nome);
const idades = pessoas.map((i) => i.idade);
const indice = pessoas.map((v,i) => i);

console.log(indice)
