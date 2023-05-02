const soma = (...args) => {
  let valorTotal = 0;
  for (let i of args) {
    valorTotal += i;
  }
  console.log(valorTotal);
  return valorTotal;
};

soma(2, 10, 45);
