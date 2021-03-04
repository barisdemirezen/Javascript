let hour = document.querySelector("#hours");
let minute = document.querySelector("#minutes");
let second = document.querySelector("#seconds");
const deg = 6;

function updateTime(){

let date = new Date();

let hourDegree = date.getHours() * 30;
let minuteDegree = date.getMinutes() * 6;
let secondDegree = date.getSeconds() * 6;


hour.style.transform = `rotateZ(${hourDegree + minuteDegree / 12}deg)`;
minute.style.transform = `rotateZ(${minuteDegree}deg)`;
second.style.transform = `rotateZ(${secondDegree}deg)`;

}

setInterval(updateTime,100)