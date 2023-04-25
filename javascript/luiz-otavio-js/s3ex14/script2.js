function divisivel(num) {
  if (typeof num !== 'number') return console.log("Não é um número"); 
  if (num % 5 === 0 && num % 3 === 0) return "É divisivel por 5 e por 3"
  if (num % 5 === 0) return "É divisivel por 5"
  if (num % 3 === 0) return "É divisivel por 3";
  return num;
}

for(let i = 0; i <= 100; i++){
    console.log(i, divisivel(i));
}

