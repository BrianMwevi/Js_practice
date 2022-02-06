var correctAnswers = {
	day: "saturday",
    module: "javascript",
    questions1: "Answer 1",
    
	
};



// We want to get data from form
// Get the form that user uses to submit data
// you can create a variable using "var" or "let"
let userForm = document.getElementById("userForm");
let score = 0;
// Listen/Keep track if someone submits data
userForm.addEventListener("submit", function (event) {
	// Prevent the default of the form --- from submitting data
	event.preventDefault();

	// FormData represents that submitted data in key and value pairs
	var userData = new FormData(userForm);
	compareData(userData);
});

function compareData(userData) {
	var today = userData.get("day");
	var module = userData.get("module");

	if (today === correctAnswers["day"]) {
		score += 5;
	} else {
		// if the user answer is wrong/false
		alert("Sipangwigwi");
	}
	// Display score to the user
	let userScore = document.querySelector(".score");
	userScore.textContent = score;
	userScore.style.color = "red";
	userForm.style.display = "none";

	// userScore;
}

// Compare the data with what we have

// Show user if his/her data matches what we have


