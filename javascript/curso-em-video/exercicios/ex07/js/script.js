function calcular() {
  var data = new Date();
  var ano = data.getFullYear();
  var anousuario = document.getElementById("numero").value;
  var sexo = document.getElementsByName("radio");
  var resultado = document.getElementById("resultado");
  var genero = "";
  var idade = ano - anousuario;

  if (sexo[0].checked) {
    var genero = "Masculino";

    if (anousuario > ano) {
      window.alert(`${idade}, Viajante do tempo ${genero}`);
    } else if (idade <= 6) {
      
    } else if (idade <= 18) {
      window.alert(`${idade}, criança ${genero}`);
    } else if (idade <= 59) {
      window.alert(`${idade}, adulto ${genero}`);
    } else if (idade <= 95) {
      window.alert(`${idade}, velho ${genero}`);
    } else if (idade >= 96) {
      window.alert(`${idade}, titã velho ${genero}`);
    }

  } else if (sexo[1].checked) {
    var genero = "Feminino";
  }

  resultado.innerHTML = `Você é um(a) ${genero} com ${idade} anos de idade.`;
}
