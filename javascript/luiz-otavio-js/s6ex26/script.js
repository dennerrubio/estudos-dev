const inputtexto = document.querySelector("#inputtexto");
const botao = document.querySelector("#botao");
const soma1 = 22;
botao.addEventListener("click", function (e) {
  const cpf = inputtexto.value.replace(/\D+/g, "");
  const cpfArray = Array.from(cpf).slice(0, -2);
  console.log(cpfArray);
  if (cpf.length > 11 || cpf.length < 11) {
    alert("CPF INVALIDO");
  } else {
    calculo1(cpfArray);
    calculo2(cpfArray);
    const somaArray = cpfArray.reduce((a, b) => a + b);
    if (somaArray === cpf) {
      alert("SEU CPF É VÁLIDO");
    } else {
      alert("ESSE CPF NÃO EXISTE");
    }
  }
});

function calculo1(cpfArray) {
  let calc = 0;
  for (let i = 0; i < 9; i++) {
    calc += cpfArray[i] * (10 - i);
    console.log(calc);
  }
  const res1Dig = 11 - (calc % 11);
  if (res1Dig > 9) {
    cpfArray.push("0");
  } else {
    cpfArray.push(String(res1Dig));
  }
}

function calculo2(cpfArray) {
  let calc2 = 0;
  for (let i = 0; i < 10; i++) {
    calc2 += cpfArray[i] * (11 - i);
    console.log(calc2);
  }
  const res2Dig = 11 - (calc2 % 11);
  if (res2Dig > 9) {
    cpfArray.push("0");
  } else {
  cpfArray.push(String(res2Dig));
  }
}
