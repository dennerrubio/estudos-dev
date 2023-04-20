window.onload = function coletarData() {
  const caixa = document.querySelector("#caixa");
  const data = new Date();
  const texto = criarTexto("texto");
  texto.innerHTML = `${getDayName(data)}, ${data.getDate()} de 
  ${getMonthName(data)} de ${data.getFullYear()} <br> ${createClock(data)}`;
  caixa.appendChild(texto);
};

function criarTexto(className) {
  const p = document.createElement("p");
  p.classList.add(className);
  return p;
}

function createClock(data) {
  const hora = data.getHours();
  const minutos = data.getMinutes();
  let minutosFix = "";
  if (minutos <= 9) {
    minutosFix = "0";
  } else {
    minutosFix = "";
  }
  return `${hora}:${minutosFix}${minutos}`;
}

function getDayName(data) {
  const dataSemana = data.getDay();
  const diasSemanas = [
    "domingo",
    "segunda-feira",
    "terça-feira",
    "quarta-feira",
    "quinta-feira",
    "sexta-feira",
    "sábado",
  ];
  return diasSemanas[dataSemana];
}

function getMonthName(data) {
  const dataMes = data.getMonth();
  const nomesMeses = [
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro",
  ];
  return nomesMeses[dataMes];
}
