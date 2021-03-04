const box = document.querySelectorAll(".box");
const colourCode = document.querySelector("#color-code");
const background = document.querySelector("body");
let selectedIndex;
handleClick();

function randomise() {
  let randomNum = Math.floor(Math.random() * 255 + 1);
  return randomNum;
}

function randomColourGenerator() {
  let red = randomise();
  let blue = randomise();
  let green = randomise();
  let rgb = `${red},${blue},${green}`;

  return `rgb(${rgb})`;
}

function handleClick() {
  const boxLength = box.length;
  background.style.backgroundColor = "slategrey";
  for (let i = 0; i < boxLength; i++) {
    box[i].style.visibility = "visible";
    box[i].style.backgroundColor = randomColourGenerator();
  }
  randomIndexGenerator();
}

function randomIndexGenerator() {
  selectedIndex = Math.floor(Math.random() * box.length);
  colourCode.innerHTML = box[selectedIndex].style.backgroundColor;
}

function checkIndex(index) {
  if (index === selectedIndex) {
    background.style.backgroundColor = colourCode.innerHTML;
  } else {
    box[index].style.visibility = "hidden";
  }
}
