function calculo() {
    var inicio = document.getElementById("inicio").value
    var fim = document.getElementById("fim").value
    var passos = document.getElementById("passos").value
    var paragrafo = document.getElementById("paragrafo")
    paragrafo.textContent += ` inicio ${inicio} fim ${fim} passos ${passos}`
}

/*
function calculo() {
    var paragrafo = document.getElementById("paragrafo")
    var texto = document.createTextNode(" texto adicional tlg")
    paragrafo.appendChild(texto)
}
*/

/*
var paragraph = document.getElementById("p");

paragraph.textContent += "This just got added";
<p id="p">This is some text</p>
*/