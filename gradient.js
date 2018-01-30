
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("random");

function applyBackground(){
	css.textContent = body.style.background + ";";
}

function setGradient(){
	body.style.background = "linear-gradient(to right, "+color1.value+", "+color2.value+")";
	applyBackground();
	
}

function rand(){
	var randNum = Math.floor((Math.random() * 255) + 0);
	return randNum;
}

function randomGradient(){

	body.style.background = "linear-gradient(to right,rgb("+rand()+"," +rand()+"," +rand()+"), rgb("+rand()+"," +rand()+","+rand()+")";
	applyBackground();
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
button.addEventListener("click", randomGradient);