let i = 0;
while (i <= 10) {
  if (i === 2) {
    console.log("Pulei o número 2");
    i++;
    continue;
  }
  if (i === 7) {
    console.log("Vai acabar no número 7");
    break;
  }
  console.log(i);
  i++;
}
