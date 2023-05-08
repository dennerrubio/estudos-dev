function contagemNum(max) {
  if (max >= 10) return;
  max++;
  console.log(max);
  contagemNum(max);
}

contagemNum(0);
