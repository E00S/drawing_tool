function setup() {

    let canvas = createCanvas(600, 600);
    square(0, 0, 600)
    canvas.parent("p5")
}

function draw() {
	line(mouseX, mouseY, mouseX - 10, mouseY - 10);
}

function mousePressed() {

}

function mouseReleased() {

}

function colorBlue() {
	print("test")
}