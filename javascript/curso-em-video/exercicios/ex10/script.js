function calcular() {
    var tabuadanum = document.getElementById("tabuadanum")
    var tabuada = document.getElementById("select")
    if (tabuadanum.value.length == 0) {
        window.alert("Coloque algum valor na caixa de texto.")
    } else {
        var num = Number(tabuadanum.value)
        var c = 1
        tabuada.innerHTML = ''
        while(c <= 10) {
            var item = document.createElement("option")
            item.innerHTML = `${num} x ${c} = ${num*c}`
            tabuada.appendChild(item)
            c++
        }
    }
}