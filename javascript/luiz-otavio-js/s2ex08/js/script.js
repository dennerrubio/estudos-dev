function calcular() {
  const peso = document.getElementById("peso").value;
  const altura = document.getElementById("altura").value;
  const caixa = document.getElementById("caixa");
  const texto = document.createElement("p");
  const calculo = Number(peso / (altura * altura));
  texto.classList.add("texto");
  caixa.innerHTML = " ";
  if (
    peso === "" ||
    altura === "" ||
    peso <= 0 ||
    altura <= 0 ||
    altura > 9.99
  ) {
    texto.innerHTML = `ERRO AO EXECUTAR CÁLCULO, VERIFIQUE SE: <br>
        • Se as duas caixas estão preenchidas com os valores. <br>
        • Se os números são positivos e acima de zero. <br>
        • Se existe ponto ou virgula na altura para diferenciar metros de centímetros.`;
    caixa.appendChild(texto);
  } else if (calculo <= 18.5) {
    texto.innerHTML = `Seu IMC é de ${calculo.toFixed(
      1
    )}, você está abaixo do peso.`;
    caixa.appendChild(texto);
  } else if (calculo <= 24.99) {
    texto.innerHTML = `Seu IMC é de ${calculo.toFixed(
      1
    )}, você está com o peso normal.`;
    caixa.appendChild(texto);
  } else if (calculo <= 29.99) {
    texto.innerHTML = `Seu IMC é de ${calculo.toFixed(
      1
    )}, você está com sobrepeso.`;
    caixa.appendChild(texto);
  } else if (calculo <= 34.99) {
    texto.innerHTML = `Seu IMC é de ${calculo.toFixed(
      1
    )}, você está com obesidade grau 1.`;
    caixa.appendChild(texto);
  } else if (calculo <= 39.99) {
    texto.innerHTML = `Seu IMC é de ${calculo.toFixed(
      1
    )}, você está com obesidade grau 2.`;
    caixa.appendChild(texto);
  } else {
    texto.innerHTML = `Seu IMC é de ${calculo.toFixed(
      1
    )}, você está com obesidade grau 3.`;
    caixa.appendChild(texto);
  }
}
