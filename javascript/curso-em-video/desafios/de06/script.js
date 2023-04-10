var botao = document.getElementById("botao")
botao.addEventListener("click",calcular)

function calcular() {
    var valor = document.getElementById("valor").valueAsNumber
    var resultado = document.getElementById("resultado")
    var textoresultado = document.createElement("p")
    var kevin = Number(273.15)
    resultado.innerHTML = " "
    if (valor.length == 0) {
        textoresultado.innerHTML = "Por favor insira um valor."
        resultado.appendChild(textoresultado)
    } else {
        textoresultado.innerHTML = `<h1> Essa temperatura de ${valor}ºC corresposde a: </h1>
        ${valor+kevin}ºK (Kelvin)<br>
        ${(valor*9/5)+32}ºF (Fahrenheit)`
        resultado.appendChild(textoresultado)
    }
}