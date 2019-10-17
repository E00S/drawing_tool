function setup() {

    let canvas = createCanvas(600, 600);
    square(0, 0, 600)
    canvas.parent("p5")
}

function draw() {
	var redColor = document.getElementById('r');
	var greenColor = document.getElementById('g');
	var blueColor = document.getElementById('b');

	print(redColor.value);

	fill(redColor.value, greenColor.value, blueColor.value);
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