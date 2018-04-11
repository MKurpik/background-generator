var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("tlo");
var butt = document.getElementById("butt");
function setGradient(){
		body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+" , " 
	+ color2.value 
	+ ")";
  
}

function get_random_color2() 
{
    var r = function () { return Math.floor(Math.random()*256) };
    return "rgb(" + r() + "," + r() + "," + r() + ")";
     }
function consoleLog(){
		body.style.background = 
	"linear-gradient(to right, " 
	+ get_random_color2()
	+" , " 
	+ get_random_color2()
	+ ")";
  
}

// randomRGB(){ var c = Math.random()*16777215; return 'rgb('+((c >> 16) & 0xff)+','+((c >> 8) & 0xff)+','+(c & 0xff)+')'; }
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
butt.addEventListener("click", consoleLog);