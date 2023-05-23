const inputtexto = document.querySelector("#inputtexto");
const botao = document.querySelector("#botao");
const soma1 = 22;
botao.addEventListener("click", function (e) {
  let cpf = inputtexto.value.replace(/\D+/g, "");
  let cpfArray = Array.from(cpf).slice(0, -2);
  alert(cpf);
  alert(cpfArray);
  if (cpf.length > 11 || cpf.length < 11) {
    console.log("cpf invalido");
  } else {
    console.log("cpf valido");
    for (let i = 0; i = 10; i++) {
      let calc = 0;
      calc += cpfArray[10] * i;
      console.log(calc);
    }
  }
});
