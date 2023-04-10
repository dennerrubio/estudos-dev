var botao = document.getElementById("botao");
botao.addEventListener("click", calcular);

function calcular() {
  var valor = document.getElementById("valor").value;
  var valor2 = document.getElementById("valor2").value;
  var resultado = document.getElementById("resultado");
  var textoresultado = document.createElement("p");
  const conversao = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  resultado.innerHTML = " ";
  if (valor.length == 0 || valor2.length == 0 || valor <= 0 || valor2 <= 0) {
    textoresultado.innerHTML = "Por favor insira um valor.";
    resultado.appendChild(textoresultado);
  } else {
    textoresultado.innerHTML = `<h1> A conversão de R$${valor} corresposde a: </h1>
       O valor ficou convertido em ${conversao.format(valor*valor2)}.`;
    resultado.appendChild(textoresultado);
  }
}
