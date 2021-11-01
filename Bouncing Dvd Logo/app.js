$obj = {
    box : document.querySelector("#box"),
    discOuter : document.querySelector("#disc-outer"),
    dvd : document.querySelector("#dvd"),
    videoText : document.querySelector("#video-text")
}

colors = ['49FF00', '88E0EF', 'FF9300', 'FF0000', 'FFB319'];

let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;

let boxWidth = $obj.box.offsetWidth;
let boxHeight = $obj.box.offsetHeight;

$obj.box.style.left = "0"
$obj.box.style.top = "0"

let x = 0;
let y = 0;
let j = 0;
let k = colors.length;
let xDirection = true;
let yDirection = true;

setInterval(function() {
    
    if (yDirection) {
        $obj.box.style.top = `${y}px`;
        y++;
    }
    else {
        $obj.box.style.top = `${y}px`;
        y--;
    }

    if (xDirection) {
        $obj.box.style.left = `${x}px`;
        x++;
    }
    else {
        $obj.box.style.left = `${x}px`;
        x--;
    }

    if(y + boxHeight >= windowHeight || y <= 0) {
        yDirection = !yDirection;
        changeColor();
    }

    if(x + boxWidth >= windowWidth || x <= 0) {
        xDirection = !xDirection;
        changeColor();
    }

}, 8)

function changeColor() {
    j = j % k;
    $obj.discOuter.style.backgroundColor = `#${colors[j]}`;
    $obj.dvd.style.color = `#${colors[j]}`;
    $obj.videoText.style.color = `#${colors[j]}`;
    j++;
}