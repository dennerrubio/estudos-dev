var botao = document.getElementById("botao");
botao.addEventListener("click", calcular);

function calcular() {
  var valor = document.getElementById("valor").value;
  var valor2 = document.getElementById("valor2").value;
  var resultado = document.getElementById("resultado");
  var textoresultado = document.createElement("p");
  var desconto = (valor2*valor)/100
  var precofinal = valor-desconto
  const conversao = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  resultado.innerHTML = " ";
  if (valor.length == 0 || valor2.length == 0 || valor <= 0 || valor2 <= 0) {
    textoresultado.innerHTML = "Por favor insira um valor.";
    resultado.appendChild(textoresultado);
  } else {
    textoresultado.innerHTML = `<h1> O seu produto custa R$${valor}: </h1>
       Você conseguiu ${conversao.format(desconto)} de desconto (-${valor2}%). <br>
       O preço final do produto vai ficar por apenas ${conversao.format(precofinal)}.`;
    resultado.appendChild(textoresultado);
  }
}
