const timer = document.getElementById("timer");
const iniciar = document.querySelector("#iniciar");
const pausar = document.querySelector("#pausar");
const resetar = document.querySelector("#resetar");
let segundos = 0;
let comecouTimer;

iniciar.addEventListener("click", function (evento) {
  clearInterval(comecouTimer);
  iniciarTimer();
});
pausar.addEventListener("click", function (evento) {
  clearInterval(comecouTimer);
});
resetar.addEventListener("click", function (evento) {
  clearInterval(comecouTimer);
  timer.innerHTML = "00:00:00";
  segundos = 0;
});

function relogio(segundos) {
  const r = new Date(segundos * 1000);
  return r.toLocaleTimeString("pt-BR", { hour12: false, timeZone: "UTC" });
}

function iniciarTimer() {
  comecouTimer = setInterval(function () {
    segundos++;
    timer.innerHTML = relogio(segundos);
  }, 1000);
}
