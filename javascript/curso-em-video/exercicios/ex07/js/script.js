function calcular() {
  var data = new Date();
  var ano = data.getFullYear();
  var anousuario = document.getElementById("numero").value;
  var sexo = document.getElementsByName("radio");
  var resultado = document.getElementById("resultado");
  var img = document.getElementById("img");
  var genero = "";
  var idade = ano - anousuario;

  if (sexo[0].checked) {
    var genero = "Masculino";

    if (anousuario > ano) {
      img.src = "img/timetravel.jpg";
    } else if (idade <= 6) {
      img.src = "img/m-baby.jpg";
    } else if (idade <= 18) {
      img.src = "img/m-kid.jpg";
    } else if (idade <= 59) {
      img.src = "img/m-adult.jpg";
    } else if (idade <= 95) {
      img.src = "img/m-old.jpg";
    } else if (idade >= 96) {
      img.src = "img/skele.jpg";
    }
  } else if (sexo[1].checked) {
    var genero = "Feminino";

    if (anousuario > ano) {
      img.src = "img/timetravel.jpg";
    } else if (idade <= 6) {
      img.src = "img/f-baby.jpg";
    } else if (idade <= 18) {
      img.src = "img/f-kid.jpg";
    } else if (idade <= 59) {
      img.src = "img/f-adult.jpg";
    } else if (idade <= 95) {
      img.src = "img/f-old.jpg";
    } else if (idade >= 96) {
      img.src = "img/skele.jpg";
    }
  }

  if (anousuario > ano) {
    resultado.innerHTML = `Você nasceu em ${anousuario}? Você por acaso é um viajante do tempo?`;
  } else {
    resultado.innerHTML = `Seu gênero é ${genero} e você tem ${idade} anos de idade.`;
  }
}
