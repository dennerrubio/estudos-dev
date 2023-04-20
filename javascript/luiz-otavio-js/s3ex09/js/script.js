window.onload = function coletarData() {
  const caixa = document.querySelector("#caixa");
  const data = new Date();
  const hora = data.getHours();
  const minutos = data.getMinutes();
  const minutosFix = "";
  const horario = createClock(hora, minutos, minutosFix);
  const dataNomeSemana = getDayName(data);
  const dataNomeMes = getMonthName(data);
  const texto = criarTexto("texto");
  texto.innerHTML = `${dataNomeSemana}, ${data.getDate()} de ${dataNomeMes} de ${data.getFullYear()} <br> ${horario}`;
  caixa.appendChild(texto);
};

function criarTexto(className) {
  const p = document.createElement("p");
  p.classList.add(className);
  return p;
}

function createClock(hora, minutos, minutosFix) {
  if (minutos <= 9) {
    minutosFix = "0";
  } else {
    minutosFix = "";
  }
  const horario = `${hora}:${minutosFix}${minutos}`;
  return horario;
}

function getDayName(data) {
  const dataSemana = data.getDay();
  if (dataSemana === 0) {
    const getDayName = "domingo";
    return getDayName;
  }
  if (dataSemana === 1) {
    const getDayName = "segunda-feira";
    return getDayName;
  }
  if (dataSemana === 2) {
    const getDayName = "terça-feira";
    return getDayName;
  }
  if (dataSemana === 3) {
    const getDayName = "quarta-feira";
    return getDayName;
  }
  if (dataSemana === 4) {
    const getDayName = "quinta-feira";
    return getDayName;
  }
  if (dataSemana === 5) {
    const getDayName = "sexta-feira";
    return getDayName;
  }
  if (dataSemana === 6) {
    const getDayName = "sábado";
    return getDayName;
  }
}

function getMonthName(data) {
  const dataMes = data.getMonth();
  if (dataMes === 0) {
    const getMonthName = "janeiro";
    return getMonthName;
  }
  if (dataMes === 1) {
    const getMonthName = "fevereiro";
    return getMonthName;
  }
  if (dataMes === 2) {
    const getMonthName = "março";
    return getMonthName;
  }
  if (dataMes === 3) {
    const getMonthName = "abril";
    return getMonthName;
  }
  if (dataMes === 4) {
    const getMonthName = "maio";
    return getMonthName;
  }
  if (dataMes === 5) {
    const getMonthName = "junho";
    return getMonthName;
  }
  if (dataMes === 6) {
    const getMonthName = "julho";
    return getMonthName;
  }
  if (dataMes === 7) {
    const getMonthName = "agosto";
    return getMonthName;
  }
  if (dataMes === 8) {
    const getMonthName = "setembro";
    return getMonthName;
  }
  if (dataMes === 9) {
    const getMonthName = "outubro";
    return getMonthName;
  }
  if (dataMes === 10) {
    const getMonthName = "novembro";
    return getMonthName;
  }
  if (dataMes === 11) {
    const getMonthName = "dezembro";
    return getMonthName;
  }
}
