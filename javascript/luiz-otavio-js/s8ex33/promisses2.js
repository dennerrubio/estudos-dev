function prom(msg, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(msg);
    }, time);
  });
}

const arrayPromessas = [
  "Inicio da Promessa",
  prom("promessa 1", 1000),
  prom("promessa 2", 3000),
  prom("promessa 3", 4000),
  "Fim das Promessas",
];

Promise.all(arrayPromessas).then((e) => {
  console.log(e);
});
