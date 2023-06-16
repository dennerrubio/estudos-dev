import "./css/style.css";
import { gerarsenha } from "./modules/random";

const resultado = document.querySelector(".resultado");
const btnUpper = document.querySelector("#inputupper");
const btnLower = document.querySelector("#inputlower");
const btnNum = document.querySelector("#inputnumber");
const valueNum = document.querySelector("#inputsize");
const botao = document.querySelector("#botao");

botao.addEventListener("click", () => {
  resultado.innerHTML = "";
  const upperRes = btnUpper.checked ? true : false;
  const lowerRes = btnLower.checked ? true : false;
  const numRes = btnNum.checked ? true : false;
  const numValue = Number(valueNum.value);
  console.log(numValue);
  const texto = document.createElement("p");
  texto.classList.add("senhacolor");
  if (numValue >= 1 && numValue <= 20) {
    texto.innerHTML = gerarsenha(numValue, upperRes, lowerRes, numRes);
    resultado.appendChild(texto);
  } else {
    texto.innerHTML = `Insira uma quantidade de digitos para senha entre 1 e 20.`;
    resultado.appendChild(texto);
  }
});
