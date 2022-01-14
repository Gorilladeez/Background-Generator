var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");


// This function grabs the body background property and sets linear-gradient
function setGradient() {
	body.style.background = "linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
};

//Event listeners to grab color input value
color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);