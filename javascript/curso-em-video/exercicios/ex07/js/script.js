function calcular() {
  var data = new Date();
  var ano = data.getFullYear();
  var anousuario = document.getElementById("numero").value;
  var sexo = document.getElementsByName("radio");
  var resultado = document.getElementById("resultado");
  var genero = "";
  
  if (sexo[0].checked) {
    var genero = "Masculino";
  } else if (sexo[1].checked) {
    var genero = "Feminino";
  }

  window.alert(`Ano atual ${ano}, vc nasceu ${anousuario} e é ${genero}`);
}
