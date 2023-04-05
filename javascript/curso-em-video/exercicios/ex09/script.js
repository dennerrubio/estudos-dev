function calculo() {
  var inicio = document.getElementById("inicio").valueAsNumber;
  var fim = document.getElementById("fim").valueAsNumber;
  var passos = document.getElementById("passos").valueAsNumber;
  var paragrafo = document.getElementById("paragrafo");
  paragrafo.innerHTML = " ";
  if (inicio <= fim) {
    for (var c = inicio; c <= fim; c += passos) {
      paragrafo.innerHTML += ` ${c} &#x27A1;`;
    }
    paragrafo.innerHTML += ` &#x1F3F3;`;
  } else {
    paragrafo.innerHTML = `Preencha as informações corretamente.`;
  }
}

/*
function calculo() {
    var paragrafo = document.getElementById("paragrafo")
    var texto = document.createTextNode(" texto adicional tlg")
    paragrafo.appendChild(texto)
}
*/
