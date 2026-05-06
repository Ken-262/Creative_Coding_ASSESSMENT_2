function setup() {
  createCanvas(400, 400);
  textAlign(CENTER, CENTER);
  textSize(55);
}

function draw() {
  background(180, 167, 205); // This is the background color.
  fill(160 + mouseX, mouseY, 170, 245); // This one is the colors of the text with a twist, where if you hover around your mouse on the text it changes its color.
  text("In Bloom", width / 2, height / 2); // This is the dimension of the text.
}