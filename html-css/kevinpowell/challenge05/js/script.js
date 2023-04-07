function janela() {
  var menu = document.getElementById("menu");
  if (window.innerWidth < 769) {
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
  }
}

function menu() {
  var menu = document.getElementById("menu");
  if (menu.style.display === "flex") {
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
  }
}
