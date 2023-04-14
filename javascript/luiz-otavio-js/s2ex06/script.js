const botao = document.getElementById("botao");
botao.addEventListener("click", calculo);

function calculo() {
  const num = prompt("Digite um número:");
  const par1 = document.getElementById("p1");
  const par2 = document.getElementById("p2");
  const decimal = Number(num).toFixed(2);
  const numero = isNaN(num);
  const inteiro = Number.isInteger(Number(num))
  par1.innerHTML = `O seu numero é: ${num}`;
  par2.innerHTML = `Raiz quadrada: ${num ** 0.5} <br>
  ${num} é inteiro: ${inteiro} <br>
  É NaN: ${numero} <br>
  Arredondando pra baixo: ${Math.floor(num)} <br>
  Arredondando pra cima: ${Math.ceil(num)} <br>
  Com duas casas decimais: ${decimal}`;
}
