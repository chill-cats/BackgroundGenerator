var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.querySelector(".randomBtn");
function inputHandler() {
  body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
  css.textContent = body.style.background + ";";
}

const randomColorGen = () => {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

function setRandomColor() {
  color1.value = randomColorGen();
  color2.value = randomColorGen();
  body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
  css.textContent = body.style.background + ";";
}
setRandomColor();

// Event
color1.addEventListener("input", inputHandler);
color2.addEventListener("input", inputHandler);
random.addEventListener("click", setRandomColor);
