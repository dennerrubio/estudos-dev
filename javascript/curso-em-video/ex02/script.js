function getNome() {
    var nome = window.prompt("Qual o seu nome?")
    window.alert(`Olá ${nome}, como vai você? ${nome}! ${nome.toUpperCase()}!`)
}

function getNumeros() {
    var n1 = Number(window.prompt("Digite um número:"))
    var n2 = Number(window.prompt("Digite outro número:"))
    var soma = n1 + n2
    window.alert(`A soma do número ${n1} com ${n2} é igual a ${soma}.`)
}