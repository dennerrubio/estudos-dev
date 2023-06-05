function promessinha(msg, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof msg !== "string") {
        reject("Valor Inválido");
      }
      resolve(msg + "- passei na promise.");
    }, tempo);
  });
}

async function execPromessinha() {
  try {
    const f1 = await promessinha("FASE 1", 1000);
    console.log(f1);
    const f2 = await promessinha("FASE 2", 2000);
    console.log(f2);
    const f3 = await promessinha("FASE 3", 500);
    console.log(f3);
  } catch (e) {
    console.log(e);
  }
}

execPromessinha();
