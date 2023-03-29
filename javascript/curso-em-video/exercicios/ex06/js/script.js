function chamada() {
  var data = new Date();
  var hora = data.getHours();
  var msg = document.querySelector("p#msg");
  var img = document.querySelector("img#img");
  var fundo = document.querySelector("body#fundo");

  if (hora < 6 || (hora > 19 && hora < 24)) {
    msg.innerHTML = `São ${hora} horas, boa noite.`;
    img.src = "img/foto_noite.jpg";
    fundo.style.background = "#132a54";
  } else if (hora < 12) {
    msg.innerHTML = `São ${hora} horas, bom dia.`;
    img.src = "img/foto_manha.jpg";
    fundo.style.background = "#75c765";
  } else if (hora >= 12 && hora <= 19) {
    msg.innerHTML = `São ${hora} horas, boa tarde.`;
    img.src = "img/foto_tarde.jpg";
    fundo.style.background = "#a43246";
  } else if (hora >= 24) {
    msg.innerHTML = `Algo deu errado, você não deveria estar aqui.`;
    img.src = "img/erro.jpg";
    fundo.style.background = "#1a1a1a";
  }
}
