const inputtexto = document.querySelector("#inputtexto");
const inputbotao = document.querySelector("#inputbotao");
const lista = document.querySelector("#lista");

inputbotao.addEventListener("click", function (e) {
  if (!inputtexto.value) {
    console.log("Text not found");
  } else {
    createTask(inputtexto.value);
    inputCleaning();
    saveTasks();
  }
});

inputtexto.addEventListener("keypress", function (e) {
  if (e.keyCode === 13) {
    if (!inputtexto.value) {
      console.log("Text not found");
    } else {
      createTask(inputtexto.value);
      inputCleaning();
      saveTasks();
    }
  }
});

document.addEventListener("click", function (e) {
  const el = e.target;
  if (el.classList.contains("botaoapagar")) {
    el.parentElement.remove();
    saveTasks();
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

function saveTasks() {
  const liTarefas = lista.querySelectorAll("li");
  const listaTarefas = [];
  for (let i of liTarefas) {
    let tarefaTexto = i.innerText;
    tarefaTexto = tarefaTexto.replace("Apagar", "").trim();
    listaTarefas.push(tarefaTexto);
  }
  const listaTarefasJSON = JSON.stringify(listaTarefas);
  localStorage.setItem("tarefas", listaTarefasJSON);
}

function retomarTasks() {
  const retakelist = localStorage.getItem("tarefas");
  const listaTarefas = JSON.parse(retakelist);
  for (let i of listaTarefas) {
    createTask(i);
  }
}
retomarTasks();
