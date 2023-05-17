const numeros = [2, 4, 5, 8, 10, 35, 27, 40, 23, 50];

const filtro = numeros
  .filter((v) => v % 2 === 0)
  .map((v) => v * 2)
  .reduce((a, b) => (a += b));

console.log(filtro);
