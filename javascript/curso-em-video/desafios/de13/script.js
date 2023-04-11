var botao = document.getElementById("botao");
botao.addEventListener("click", calcular);

function calcular() {
  var valor = document.getElementById("valor").value;
  var valor2 = document.getElementById("valor2").value;
  var resultado = document.getElementById("resultado");
  var textoresultado = document.createElement("p");
  var media = (Number(valor)+Number(valor2))/2
  resultado.innerHTML = " ";
  if (valor.length == 0 || valor2.length == 0 || valor < 0 || valor2 < 0 || valor > 10 || valor2 > 10) {
    textoresultado.innerHTML = "Por favor insira um valor, as notas precisam ser entre 0 e 10";
    resultado.appendChild(textoresultado);
  } else if (media < 4) {
    textoresultado.innerHTML = `<h1> Aqui está a sua média: </h1>
    Sua primeira nota foi ${valor}, enquanto sua segunda nota foi ${valor2}. <br>
    Logo sua média foi ${media}, portanto você foi Reprovado `;
    resultado.appendChild(textoresultado);
  } else if (media < 7) {
    textoresultado.innerHTML = `<h1> Aqui está a sua média: </h1>
    Sua primeira nota foi ${valor}, enquanto sua segunda nota foi ${valor2}. <br>
    Logo sua média foi ${media}, portanto você está de Recuperação `;
    resultado.appendChild(textoresultado);
  } else {
    textoresultado.innerHTML = `<h1> Aqui está a sua média: </h1>
    Sua primeira nota foi ${valor}, enquanto sua segunda nota foi ${valor2}. <br>
    Logo sua média foi ${media}, portanto você foi Aprovado `;
    resultado.appendChild(textoresultado);
  }
}
