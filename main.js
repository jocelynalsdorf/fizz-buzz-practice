$(document).ready(function(){


var fizz = "fizz!";
var buzz = "buzz!";
var fizzBuzz = "fizzbuzz!!";


for (var i = 0; i < 101; i++) {
	if (i % 3 === 0){
		$("p").append("<span>" + fizz + "</span>");

	}
	else if (i % 5 === 0) {
		$("p").append("<span>" + buzz + "</span>");
	}

	else if (i % 15 === 0) {
		$("p").append("<span>" + fizzBuzz + "</span>");
	}
	else {
		$("p").append("<span>" + i + "</span>");
	}
}





});


