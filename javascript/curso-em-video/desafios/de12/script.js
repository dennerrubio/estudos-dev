var botao = document.getElementById("botao");
botao.addEventListener("click", calcular);

function calcular() {
  var valor = document.getElementById("valor").valueAsNumber;
  var valor2 = document.getElementById("valor2").valueAsNumber;
  var resultado = document.getElementById("resultado");
  var textoresultado = document.createElement("p");
  const conversao = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  resultado.innerHTML = " ";
  var caso1 = valor-valor2
  var caso2 = valor2-valor
  var porcvalor1 = (valor-valor2)/valor2*100
  var porcvalor2 = (valor2-valor)/valor*100
  if (valor.length == 0 || valor2.length == 0 || valor <= 0 || valor2 <= 0) {
    textoresultado.innerHTML = "Por favor insira um valor.";
    resultado.appendChild(textoresultado);
  } else if (valor == valor2) {
    textoresultado.innerHTML = `<h1>Analisando os valores</h1>
    O valor permanece o mesmo.`;
    resultado.appendChild(textoresultado);
  } else if (valor < valor2) {
    textoresultado.innerHTML = `<h1>Analisando os valores</h1>
    O preço era ${conversao.format(valor)} e passou a ser ${conversao.format(valor2)}. <br>
    O preço aumentou. <br>
    Isso foi um aumento de ${conversao.format(caso2)} <br>
    Aumentou ${porcvalor2.toFixed(2)}%.`;
    resultado.appendChild(textoresultado);
  } else if (valor > valor2) {
    textoresultado.innerHTML = `<h1>Analisando os valores</h1>
    O preço era ${conversao.format(valor)} e passou a ser ${conversao.format(valor2)}. <br>
    O preço diminuiu. <br>
    Isso foi uma diminuição de ${conversao.format(caso1)} <br>
    Diminuiu ${porcvalor1.toFixed(2)}%.`;
    resultado.appendChild(textoresultado);
  }
}
