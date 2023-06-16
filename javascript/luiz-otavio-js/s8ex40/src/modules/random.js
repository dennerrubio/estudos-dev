const letterUpper = "ABCDEFGHJKLMNOPQRSTUVXYZ";
const letterLower = "abcdefghjkmnopqrstuvxyz";
const numbers = "123456789";
const random = (min, max) => Math.floor(Math.random() * (max - min) + min);
export let senha = [];

export function gerarsenha(value, upper, lower, num) {
  senha = [];
  for (let i = 0; i < value; i++) {
    upper && senha.push(letterUpper[random(0, letterUpper.length)]);
    num && senha.push(numbers[random(0, numbers.length)]);
    lower && senha.push(letterLower[random(0, letterLower.length)]);
  }
  return senha.slice(0, value).join("");
}
