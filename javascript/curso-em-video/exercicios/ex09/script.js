function calculo() {
    var inicio = document.getElementById("inicio").valueAsNumber
    var fim = document.getElementById("fim").valueAsNumber
    var passos = document.getElementById("passos").valueAsNumber
    var paragrafo = document.getElementById("paragrafo")
    paragrafo.innerHTML = " "
    for (var c = inicio; c <= fim; c += passos) {
        paragrafo.innerHTML += ` ${c} >`
    }
    paragrafo.innerHTML += ` fim.`
}

/*
function calculo() {
    var paragrafo = document.getElementById("paragrafo")
    var texto = document.createTextNode(" texto adicional tlg")
    paragrafo.appendChild(texto)
}
*/