import "./css/style.css";
import GeraCPF from "./modules/geradorcpf.js";

const botao = document.querySelector("#botao");
const divresultado = document.querySelector(".resultado");
botao.addEventListener("click", () => {
  divresultado.innerHTML = "";
  const resultCPF = new GeraCPF();
  const texto = document.createElement("p");
  texto.classList.add("cpfvalores")
  texto.innerHTML = resultCPF.gerarNovoCPF();
  divresultado.appendChild(texto);
});
