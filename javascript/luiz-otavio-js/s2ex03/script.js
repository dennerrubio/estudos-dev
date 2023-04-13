const botao = document.getElementById("botao")
botao.addEventListener("click",calculo)

function calculo(){
    const num1 = prompt("Digite um número")
    const num2 = prompt("Digite outro número")
    const soma = Number(num1)+Number(num2)
    alert(`O resultado da soma dos dois é ${soma}`)
}