
let difficult = 0;
let questions;
let container = document.querySelector(".container");
let started = false;

startQuiz(difficult);

function startQuiz(difficult){

	if(difficult === 0)
	{
		difficult = "easy";
	}
	else if(difficult === 1)
	{
		difficult = "medium";
	}
	else
	{
		difficult = "hard";
	}

	if(started)
	{
		document.querySelectorAll('.question').forEach(e => e.remove());
		document.querySelectorAll('.answer').forEach(e => e.remove());
	}

	let fetchurl = `https://opentdb.com/api.php?amount=5&category=18&difficulty=${difficult}&type=multiple`;
	
	fetch(fetchurl)
		.then((response) => response.json())
		.then((res) => questions = res.results)
		.then(() => 
			{
				for (let q in questions) {
				    var newElement = document.createElement('div');
				    newElement.className = "question";
				    newElement.innerHTML = questions[q].question;
			        container.appendChild(newElement);
				    questions[q].incorrect_answers.push(questions[q].correct_answer);
				    
				    questions[q].incorrect_answers = shuffleArray(questions[q].incorrect_answers);

				    for (let a in questions[q].incorrect_answers) {
				    	var newElement = document.createElement('div');
					    newElement.className = "answer";					   
					    newElement.innerHTML = questions[q].incorrect_answers[a];
					    container.appendChild(newElement);					   
				    }
				    started = true;
			} 

			let elements = document.getElementsByClassName("answer");

			for (let i = 0; i < elements.length; i++) {
			    elements[i].addEventListener('click', function(){
			    	if(findon(questions,this.innerHTML))
			    	{
			    		this.classList.add("correct");
			    	}
			    	else
			    	{
			    		this.classList.add("wrong");
			    	}
			    });
			}

			
		});

}

function findon(arr, obj) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].correct_answer == obj) return true;
  }
}

function shuffleArray(array) { 
   for (var i = array.length - 1; i > 0; i--) {  

       var j = Math.floor(Math.random() * (i + 1)); 
                    
       var temp = array[i]; 
       array[i] = array[j]; 
       array[j] = temp; 
   } 
        
   return array; 
} 