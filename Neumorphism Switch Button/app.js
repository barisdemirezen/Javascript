let buttons = document.querySelectorAll(".box");
let switchButton = document.querySelector("#switch");
let switcher = document.querySelector("#switcher");
let switchActive = false;
buttons.forEach(e => changeButton(e));

function changeButton(e){
	e.addEventListener("click",function(){
		let icon = this.children[0].children[0];
		console.log(icon);
		if(this.hasAttribute("active"))
		{
			this.classList.remove("activeBox");
			icon.classList.remove("activeLight");
			this.removeAttribute("active");
		}
		else
		{
			let active = document.createAttribute("active");
			this.classList.add("activeBox");
			icon.classList.add("activeLight");
			this.setAttributeNode(active);
		}
		

	})
}

switchButton.addEventListener("click",function() {

	if(!switchActive)
	{
		switcher.style.left = "27%";
		let icon = this.children[0].children[0].children[0];
		icon.classList.add("activeSwitch");
		switchActive = true;
	}
	else
	{
		switcher.style.left = "-27%";
		let icon = this.children[0].children[0].children[0];
		icon.classList.remove("activeSwitch");
		switchActive = false;
	}

	
})