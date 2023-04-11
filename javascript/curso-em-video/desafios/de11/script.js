var botao = document.getElementById("botao");
botao.addEventListener("click", calcular);

function calcular() {
  var valor = document.getElementById("valor").value;
  var resultado = document.getElementById("resultado");
  var textoresultado = document.createElement("p");
  resultado.innerHTML = " ";
  if (valor.length == 0 || valor <= 0) {
    textoresultado.innerHTML = "Por favor insira um valor válido.";
    resultado.appendChild(textoresultado);
  } else if (valor%4 == 0){
    textoresultado.innerHTML = `<h1> Você digitou o ano ${valor}: </h1>
    Este ano é <strong>BISSEXTO!</strong>`;
    resultado.appendChild(textoresultado);
  } else {
    textoresultado.innerHTML = `<h1> Você digitou o ano ${valor}: </h1>
    Este ano NÃO É <strong>BISSEXTO!</strong>`;
    resultado.appendChild(textoresultado);
  }
}
