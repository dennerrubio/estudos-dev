const text = document.querySelectorAll("p");
const getBackgroundStyle = getComputedStyle(document.body);
const getBackgroundColor = getBackgroundStyle.backgroundColor;

for (let v of text) {
  v.style.backgroundColor = getBackgroundColor;
  v.style.color = "white";
}
