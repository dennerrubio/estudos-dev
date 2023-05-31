function sisPromessas(msg) {
  return new Promise((mensagem, erro) => {
    if (typeof msg !== "string") {
      erro("Valor Inválido");
    }
    setTimeout(() => {
      mensagem(msg);
    }, 1500);
  });
}

sisPromessas("teste")
  .then((e) => {
    console.log(e);
    return sisPromessas("segunda msg");
  })
  .then((e) => {
    console.log(e);
    return sisPromessas("terceira msg");
  })
  .then((e) => {
    console.log(e);
    return sisPromessas(234);
  })
  .then((e) => {
    console.log(e);
    return sisPromessas("quinta msg");
  })
  .then((e) => {
    console.log(e);
  })
  .catch((e) => {
    console.log("ERRO:", e);
  });
