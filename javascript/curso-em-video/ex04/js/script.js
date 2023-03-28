var botao = document.querySelector("input#botao");
var botao2 = document.querySelector("input#botao2");
botao.addEventListener("click", testevelocidade);
botao2.addEventListener("click", nacionalidade);

function testevelocidade() {
  var velocidade = document.getElementById("vel");
  var resultado = document.getElementById("resultado");
  var velocidade = Number(velocidade.value);
  if (velocidade > 30) {
    resultado.innerHTML =
      "Tomou multa de graça, bem feito.";
  } else {
    resultado.innerHTML = "Não tomou multa.";
  }
}

function nacionalidade() {
  var nacao = document.querySelector("input#pais").value;
  var resultado2 = document.querySelector("p#resultado2");
  if (
    nacao == "Brasil" ||
    nacao == "brasil" ||
    nacao == "Brazil" ||
    nacao == "brazil"
  ) {
    resultado2.innerHTML = "Estaaaaaaaamos no Brasil! PLIM PLIM";
  } else {
    resultado2.innerHTML = "Você é estrangeiro!";
  }
}
