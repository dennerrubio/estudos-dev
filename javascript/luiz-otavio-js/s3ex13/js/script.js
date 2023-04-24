const botao = document.querySelector("#botao");
botao.addEventListener("click", getResult);

function getResult() {
  const valor1 = document.querySelector("#inputnumero").value;
  const valor2 = document.querySelector("#inputnumero2").value;
  if (valor1 === "" || valor2 === "") {
    alert("invalido");
  } else {
    returnHigherNum(valor1, valor2)
  }
}

function returnHigherNum(valor1, valor2) {
  const num1 = Number(valor1);
  const num2 = Number(valor2);
  if (num1 === num2) {
    return alert(`Os valores são iguais`);
  }
  const result =
    num1 < num2 ? alert(`${num2} é maior`) : alert(`${num1} é maior`);
  return result;
}
