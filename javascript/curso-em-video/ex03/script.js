var corpo = window.document.body;
var titulo = window.document.getElementById('titulo');
var texto = window.document.getElementById('texto');
var caixa = window.document.getElementById('caixa');
caixa.addEventListener("mouseenter", mouseentrou);
caixa.addEventListener("mouseout", mousesaiu);
caixa.addEventListener("click", clicou);

corpo.style.backgroundColor = "black";
corpo.style.fontFamily = "Arial";
corpo.style.color = "white";
corpo.style.textAlign = "center";
corpo.style.width = "80%";
corpo.style.margin = "auto";

titulo.style.fontSize = "3rem";
titulo.innerHTML = "Isto não foi escrito no HTML";

texto.style.fontSize = "1.5rem";
texto.innerHTML = "E também não foi estilizado no CSS. <br><br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ea corporis delectus odit veniam modi est non, voluptate vitae nam sint sapiente eaque neque natus earum itaque eius facilis. Nisi dolorem rerum dolores ipsum doloribus corrupti nam tenetur, temporibus cumque adipisci alias. Ut natus blanditiis accusantium ipsa nisi quo quasi?";

caixa.innerHTML = "Clique em mim.";

function mouseentrou() {
    caixa.style.backgroundColor = "blue";
}

function mousesaiu() {
    caixa.style.backgroundColor = "green";
}

function clicou() {
    caixa.innerHTML = "Você Clicou!";
    caixa.style.backgroundColor = "red";
}
