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
  }
}

function finalizar() {
  if (seletor.innerHTML == " " || dados.length == 0) {
    window.alert("Adicione dados antes de finalizar.");
  } else {
    var texto = document.createElement("p");
    var soma = 0;
    for (var i = 0; i < dados.length; i++) {
      soma += Number(dados[i]);
    }
    var media = soma / dados.length
    texto.innerHTML = `Ao todo temos ${dados.length} números cadastrados. <br>
    O maior número foi ${Math.max(...dados)}. <br>
    O menor número foi ${Math.min(...dados)}. <br> 
    A soma de todos os números é igual a ${soma} <br>
    A média de todos os números é igual a ${media}`;
    resultados.appendChild(texto);
    seletor.innerHTML = " ";
    dados.length = 0;
  }
}
