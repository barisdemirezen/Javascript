let outerContainer = document.querySelector(".outer-container");
let innerContainer = document.querySelector(".inner-container");

let isPressed = false;
let diff = 0;
let started = 0;
let ended = 0;

innerContainer.addEventListener("mousedown", mouseDown);
innerContainer.addEventListener("mouseup", mouseUp);

function mouseDown(point) {
  point.preventDefault();
  started = point.pageX;
}
function mouseUp(point) {
  point.preventDefault();
  let ended = point.pageX;
  diff = ended - started;
  outerContainer.scrollBy(-diff, 0);
}
