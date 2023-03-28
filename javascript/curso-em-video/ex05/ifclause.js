var idade = 18;
console.log(`Sua idade é ${idade}.`);
if (idade < 16) {
  console.log("Você não pode votar.");
} else if (idade < 18) {
  console.log("O voto é opcional.");
} else if (idade < 65) {
  console.log("O voto é obrigatório.");
} else {
  console.log("O voto é opcional.");
}
