const multiply = (multiplicador) => {
  return function (n) {
    const num = n * multiplicador;
    console.log(num);
    return num;
  };
};

const duplica = multiply(2);
const triplica = multiply(3);
const vezesDez = multiply(10);

duplica(2);
triplica(2);
vezesDez(2);
