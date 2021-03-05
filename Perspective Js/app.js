
function perspective(multiplier = 1, blur = 20, shadow = "#000000"){

let container = document.querySelectorAll(".perspective-container");

container.forEach( (item) => {

		item.addEventListener("mousemove",function(e){

		let containerWidth = item.offsetWidth;
		let containerHeight = item.offsetHeight;

		let card = item.children[0];

		let x = e.clientX;
		let y = e.clientY;

		let xPercent = ( 100 / containerWidth * x ) % 100;
		let yPercent = ( 100 / containerHeight * y ) % 100;

		let yRotate = 0;
		let xRotate = 0;

		xRotate = ((( yPercent - 50 ) / 100 * 90) * -1 ) * multiplier;

		yRotate = ((( xPercent - 50 ) / 100 * 90) ) * multiplier;

		let shadowHorizontal = yRotate * 4 / 9 * multiplier * -1;
		let shadowVertical = xRotate * 4 / 9 * multiplier;

		card.style.transform = `rotateX(${xRotate/1}deg) rotateY(${yRotate/1}deg)`;

		card.style.boxShadow = `${shadowHorizontal}px ${shadowVertical}px ${blur}px 0px ${shadow}`;	

	})

})




}