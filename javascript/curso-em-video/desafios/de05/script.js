var botao = document.getElementById("botao")
botao.addEventListener("click",calcular)

function calcular() {
    var valor = document.getElementById("valor").value
    var resultado = document.getElementById("resultado")
    var textoresultado = document.createElement("p")
    resultado.innerHTML = " "
    if (valor.length == 0 || valor <= 0) {
        textoresultado.innerHTML = "Por favor insira um valor, ele precisa ser positivo e acima de 0."
        resultado.appendChild(textoresultado)
    } else {
        textoresultado.innerHTML = `<h1> Essa distância de ${valor} metros corresposde a: </h1>
        ${valor/1000} kilometros (KM) <br>
        ${valor/100} hectômetros (HM) <br>
        ${valor/10} decâmetros (DAM) <br>
        ${valor*10} decimetros (DM) <br>
        ${valor*100} centimetros (CM) <br>
        ${valor*1000} milimetros (MM)`
        resultado.appendChild(textoresultado)
    }
}