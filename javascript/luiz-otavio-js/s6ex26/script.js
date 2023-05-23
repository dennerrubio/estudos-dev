const inputtexto = document.querySelector("#inputtexto");
const botao = document.querySelector("#botao");
const soma1 = 22;
botao.addEventListener("click", function (e) {
  const cpf = inputtexto.value.replace(/\D+/g, "");
  const cpfArray = Array.from(cpf).slice(0, -2);
  console.log(cpfArray);
  if (cpf.length > 11 || cpf.length < 11) {
    console.log("cpf invalido");
  } else {
    calculo1(cpfArray);
    console.log(cpfArray);
  }
});

function calculo1(cpfArray) {
  console.log("cpf valido");
  let calc = 0;
  for (let i = 0; i < 9; i++) {
    calc += cpfArray[i] * (10 - i);
    console.log(calc);
  }
  const res1Dig = 11 - (calc % 11);
  cpfArray.push(String(res1Dig));
}
