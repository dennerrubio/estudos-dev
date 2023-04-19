function calcular() {
  const peso = document.getElementById("peso").value;
  const altura = document.getElementById("altura").value;
  const caixa = document.getElementById("caixa");
  caixa.innerHTML = " ";
  if (
    peso === "" ||
    altura === "" ||
    peso <= 0 ||
    altura <= 0 ||
    altura > 9.99
  ) {
    const texto = criarTexto("texto-erro");
    texto.innerHTML = `ERRO AO EXECUTAR CÁLCULO, VERIFIQUE SE: <br>
        • Se as duas caixas estão preenchidas com os valores. <br>
        • Se os números são positivos e acima de zero. <br>
        • Se existe ponto ou virgula na altura para diferenciar metros de centímetros.`;
    caixa.appendChild(texto);
    return;
  } else {
    const calculo = calcIMC(peso, altura);
    const calculoPeso = calcPeso(calculo);
    const texto = criarTexto("texto");
    texto.innerHTML = `Seu IMC é ${calculo} (${calculoPeso}).`;
    console.log(typeof calculo);
    console.log(typeof calculoPeso);
    caixa.appendChild(texto);
    return;
  }
}

function calcIMC(peso, altura) {
  const calculo = Number(peso / (altura * altura));
  return calculo.toFixed(2);
}

function criarTexto(classNome) {
  const texto = document.createElement("p");
  texto.classList.add(classNome);
  return texto;
}

function calcPeso(calculo) {
  const nivelIMC = [
    "Abaixo do peso",
    "Peso normal",
    "Sobrepeso",
    "Obesidade grau 1",
    "Obesidade grau 2",
    "Obesidade grau 3",
  ];
  if (calculo <= 18.5) return nivelIMC[0];
  if (calculo <= 24.99) return nivelIMC[1];
  if (calculo <= 29.99) return nivelIMC[2];
  if (calculo <= 34.99) return nivelIMC[3];
  if (calculo <= 39.99) return nivelIMC[4];
  else return nivelIMC[5];
}
