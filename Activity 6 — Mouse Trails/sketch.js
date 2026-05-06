function setup() {
  createCanvas(400, 400);
  background(255, 239, 159); // This is my background color, its like a sunshine shade.
  stroke(255, 154, 134); // Stroke color that kinda matches the ellipses
}

function draw() {
  ellipse(mouseX, mouseY, 35, 35);  // This is my ellipses where it also follows my mouse when I hover it around the canvas.
  fill(255, 179, 153); // This is the color of my ellipse that kinda resembles a sakura tree.
 
}

function mousePressed() {
  background(255, 239, 159); // This one resets the ellipses if I press the canvas or the screen.
}
