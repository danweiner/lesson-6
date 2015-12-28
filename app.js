/* logs to 
the console "hello" plus x */

// function helloName(x) {
// 	return console.log("hello " + x);
// }

// helloName("Dan");


/*multiplies two 
numbers*/

// function multiply(x, y) {
// 	return console.log(x * y);
// }

// multiply(5, 6);


/*calculates perimeter of a rectangle*/

// function getPerim(width, length, unit) {
// 	var perimeter = (width*2) + (length*2);
// 	return console.log(perimeter + " " + unit);
// }

// getPerim(10, 5, "sq ft");

$(document).ready(function(){
	$("h1").fadeOut(2000);
	//fade out over 2 seconds

	$("h2").hide();
	
	$(".box").animate({ width: 100 }, 4000, function() {
          $("h2").show(2000);
		});
	//hide h2 then show h2 after box animation

	$("h3").animate({
		opacity: 0.50,
		width: "20%"
	}, 3000);
	//slight fade in h3 element

	$("h5").click(function() {
          $("h5").slideUp();
        });
	//h5 slides up when clicked

});