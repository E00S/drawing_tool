function setup() {

    let canvas = createCanvas(600, 600);
    canvas.parent("p5")
}

function draw() {
	strokeWeight(1);
	stroke(0);
	noFill();
	square(0, 0, 600);
	var redColor = document.getElementById('r');
	var greenColor = document.getElementById('g');
	var blueColor = document.getElementById('b');
	var sWeight = document.getElementById('lineSize');


	fill(redColor.value, greenColor.value, blueColor.value);
	strokeWeight(sWeight.value);
	stroke(redColor.value, greenColor.value, blueColor.value);
	line(mouseX, mouseY, mouseX - 10, mouseY - 10);

}

function mousePressed() {

}

function mouseReleased() {

}

function colorBlue() {
	print("test")
}

var t = function( p ) { 
  var x = 100.0; 
  var y = 100; 
  var speed = 2.5; 
  p.setup = function() {
    p.createCanvas(87, 25);
  };

  p.draw = function() {
  	p.background('white')
    var sWeight = document.getElementById('lineSize');
    p.strokeWeight(sWeight.value);
    p.line(10, 12.5, 77, 12.5);

  };
};
var myp5 = new p5(t, 'c2');