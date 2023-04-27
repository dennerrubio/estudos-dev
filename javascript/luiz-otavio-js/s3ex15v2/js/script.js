const timer = document.querySelector("#timer");
const iniciar = document.querySelector("#iniciar");
const pausar = document.querySelector("#pausar");
const resetar = document.querySelector("#resetar");
let segundos = 0;
let minutos = 0;
let horas = 0;
let temporizador;

iniciar.addEventListener("click", function (e) {
  clearInterval(temporizador);
  startTimer();
});

pausar.addEventListener("click", function (e) {
  clearInterval(temporizador);
});

resetar.addEventListener("click", function (e) {
  clearInterval(temporizador);
  segundos = 0;
  minutos = 0;
  horas = 0;
  formatDigits();
  timer.innerHTML = `${horas}:${minutos}:${segundos}`;
});

function startTimer() {
  temporizador = setInterval(function () {
    segundos++;
    formatDigits();
    if (segundos >= 60) {
      segundos = 0;
      minutos++;
      formatDigits();
    }
    if (minutos >= 60) {
      minutos = 0;
      horas++;
      formatDigits();
    }
    timer.innerHTML = `${horas}:${minutos}:${segundos}`;
  }, 1000);
}

function formatDigits() {
  segundos = segundos.toLocaleString(undefined, { minimumIntegerDigits: 2 });
  minutos = minutos.toLocaleString(undefined, { minimumIntegerDigits: 2 });
  horas = horas.toLocaleString(undefined, { minimumIntegerDigits: 2 });
}
