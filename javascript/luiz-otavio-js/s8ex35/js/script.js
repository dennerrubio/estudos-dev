document.addEventListener("click", (e) => {
  const el = e.target;
  const tag = el.tagName.toLowerCase();
  console.log(el);
  if (tag === "a") {
    e.preventDefault();
    carregaPagina(el);
  }
});

async function carregaPagina(el) {
  try {
    const href = el.getAttribute("href");
    const response = await fetch(href);
    const responseText = await response.text();
    carregaResultado(responseText);
  } catch (e) {
    console.log(e);
  }
}

function carregaResultado(responseText) {
  const resultado = document.querySelector(".resultado");
  resultado.innerHTML = responseText;
}
