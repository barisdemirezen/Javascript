let toggle = document.querySelector("#loader");
let color = document.querySelector("#colors");

let play = document.querySelector("#play");
let pause = document.querySelector("#pause");

let running = true;


toggle.addEventListener("click", function() {
	if(running)
	{	
		pause.style.display = "none";
		play.style.display = "block";
		color.classList.remove("anim");
		running = false;
	}
	else
	{
		pause.style.display = "block";
		play.style.display = "none";
		color.classList.add("anim");
		running = true;
	}
	
})