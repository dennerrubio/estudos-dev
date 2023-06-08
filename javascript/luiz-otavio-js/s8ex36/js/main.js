// axios.get("pessoas.json").then((resposta) => dados(resposta.data));

fetch("pessoas.json")
  .then((j) => j.json())
  .then((json) => dados(json));

function dados(json) {
  const lista = document.querySelector(".resultado");
  for (let pessoas of json) {
    const texto = document.createElement("p");
    texto.innerHTML = `${pessoas.nome}, com ${pessoas.idade} anos de idade e com salário de R$${pessoas.salario}.`;
    lista.appendChild(texto);
  }
}
