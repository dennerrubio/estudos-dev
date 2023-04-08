var seletor = document.getElementById("seletor");
var resultados = document.getElementById("resultados");
var dados = [];

function adicionar() {
  var numero = document.getElementById("numero").value;
  if (numero <= 0 || numero > 100) {
    window.alert("O número precisa ser entre 1 e 100.");
  } else if (dados.includes(numero)) {
    window.alert("Esse número já consta na lista.");
  } else {
    resultados.innerHTML = " ";
    var opcao = document.createElement("option");
    dados.push(numero);
    opcao.innerHTML = `O número ${numero} foi adicionado.`;
    seletor.appendChild(opcao);
    window.alert(dados);
  }
}

function finalizar() {
  if (seletor.innerHTML == " " || dados.length == 0) {
    window.alert("Adicione dados antes de finalizar.");
  } else {
    var texto = document.createElement("p");
    texto.innerHTML = "teste de texto <br> teste de texto <br> teste de texto <br> teste de texto";
    resultados.appendChild(texto);
    seletor.innerHTML = " ";
    dados.length = 0;
  }
}
