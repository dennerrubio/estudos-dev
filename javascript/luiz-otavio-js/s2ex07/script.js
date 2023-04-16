const botao = document.getElementById("botao");
botao.addEventListener("click", formulario);
const conjunto = [];

function formulario() {
  const nome = document.getElementById("nome").value;
  const sobrenome = document.getElementById("sobrenome").value;
  const peso = document.getElementById("peso").value;
  const altura = document.getElementById("altura").value;
  const texto = document.createElement("p")
  const caixa = document.getElementById("caixa")

  const pessoa = {
    nome,
    sobrenome,
    peso,
    altura,
  };
  
  conjunto.push(pessoa)
  texto.innerHTML = `Nome: ${nome} Sobrenome: ${sobrenome} Peso: ${peso} Altura: ${altura}`
  caixa.appendChild(texto)
}


