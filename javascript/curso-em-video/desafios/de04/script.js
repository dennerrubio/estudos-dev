function dinheiro() {
  var produto = window.prompt("Qual o nome do produto que você comprou?");
  var preco = window.prompt("Quanto esse produto custou?");
  var troco = window.prompt("Quanto você pagou em dinheiro?");
  var resultado = troco - preco;
  var preco = Number(preco);
  var troco = Number(troco);
  var resultado = Number(resultado);
  var preco2 = preco.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
  var troco2 = troco.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
  var resultado2 = resultado.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
  window.alert(
    `O seu produto ${produto} custou ${preco2} e você deu ${troco2} para pagar, logo então o vendedor te deu ${resultado2} de troco.`
  );
}
