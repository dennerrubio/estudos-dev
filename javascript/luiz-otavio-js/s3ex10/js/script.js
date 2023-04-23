const elementos = [
  { tag: "p", texto: "Frase 1" },
  { tag: "div", texto: "Frase 2" },
  { tag: "section", texto: "Frase 3" },
  { tag: "footer", texto: "Frase 4" },
];

window.onload = function createTextElements() {
  const container = document.querySelector("#container");
  for (let i = 0; i < elementos.length; i++) {
    const { tag, texto } = elementos[i];
    const tagCreate = document.createElement(tag);
    tagCreate.innerHTML = `${texto}`;
    container.appendChild(tagCreate);
  }
};
