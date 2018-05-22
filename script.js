var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var buttonRandomize = document.querySelector("#randomize");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function getRandomColor() {
	var color = "#";
	for(var i = 1; i<=3; i++) {
		var temp = Math.round(Math.random()*255).toString(16);
		if (temp.length === 1) {
			temp = "0"+temp;
		}
		color = color+temp;
	}
	return color;
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

buttonRandomize.addEventListener("click", function(){
	color1.value = getRandomColor();
	color2.value = getRandomColor();
	setGradient();
});

color1.value = "#ff0000";
color2.value = "#ffff00";
setGradient();