const inputtexto = document.querySelector("#inputtexto");
const inputbotao = document.querySelector("#inputbotao");
const lista = document.querySelector("#lista");

inputbotao.addEventListener("click", function (e) {
  if (!inputtexto.value) {
    console.log("Text not found");
  } else {
    createTask(inputtexto.value);
    inputCleaning();
  }
});

inputtexto.addEventListener("keypress", function (e) {
  if (e.keyCode === 13) {
    if (!inputtexto.value) {
      console.log("Text not found");
    } else {
      createTask(inputtexto.value);
      inputCleaning();
    }
  }
});

document.addEventListener("click", function (e) {
  const el = e.target;
  if (el.classList.contains("botaoapagar")) {
    el.parentElement.remove();
  }
});

function inputCleaning() {
  inputtexto.value = "";
  inputtexto.focus();
}

function createTask(texto) {
  const li = document.createElement("li");
  const botaoapagar = document.createElement("button");
  botaoapagar.setAttribute("class", "botaoapagar");
  botaoapagar.innerHTML = "Apagar";
  li.innerHTML = texto + " ";
  lista.appendChild(li);
  li.appendChild(botaoapagar);
}
