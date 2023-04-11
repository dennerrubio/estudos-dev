var botao = document.getElementById("botao");
botao.addEventListener("click", calcular);

function calcular() {
  var valor = document.getElementById("valor").value;
  var valor2 = document.getElementById("valor2").value;
  var resultado = document.getElementById("resultado");
  var textoresultado = document.createElement("p");
  var aumento = (valor2*valor)/100
  var precofinal = Number(valor)+Number(aumento)
  const conversao = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  resultado.innerHTML = " ";
  if (valor.length == 0 || valor2.length == 0 || valor <= 0 || valor2 <= 0) {
    textoresultado.innerHTML = "Por favor insira um valor.";
    resultado.appendChild(textoresultado);
  } else {
    textoresultado.innerHTML = `<h1> Você recebeu um aumento: </h1>
    O seu salário era R$${valor} e você conseguiu um aumento de ${valor2}%. <br>
    Isso significa um aumento de ${conversao.format(aumento)}, fazendo seu novo salário ser ${conversao.format(precofinal)}.`;
    resultado.appendChild(textoresultado);
  }
}
