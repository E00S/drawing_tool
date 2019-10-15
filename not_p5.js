var redColor = document.getElementById('r');
var greenColor = document.getElementById('g');
var blueColor = document.getElementById('b');

redColor.addEventListener('input', function() {
	document.getElementById('r').style.background = "rgb(" + redColor.value + ", 0, 0)";
});

greenColor.addEventListener('input', function() {
	document.getElementById('g').style.background = "rgb(0," + greenColor.value +", 0)";
});

blueColor.addEventListener('input', function() {
	document.getElementById('b').style.background = "rgb(0,0," + blueColor.value + ")";
});