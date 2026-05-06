let mic;
function setup() {
  createCanvas(500, 500);
  background(225); // Background color that I chose.
  
  /// This is for the microphone to start so the audio visuals would work.
  mic = new p5.AudioIn(); 
  mic.start();
}

function draw() {
  let micLevel = mic.getLevel() * height * 10; // This one will get the sound value or sound level  from the mic, the higher the volume, the bigger the element or shape will be.
  
  ellipse(mouseX, mouseY, micLevel, micLevel); // I used this to make like a bubble type shape again, mouseX and mouseY to follow the mouse, and micLevel to change the size of the ellipses depending how loud the sound is.
  
  fill(170, 205, 220); // color of the ellipse to kinda replicate a bubble.
  stroke(129, 166, 198); // and its stroke also.
}

// Same thing here, background changes everytime I click it. The same thing with Activity 7.
function mousePressed() {
  background(random (200, 255), random(200,255), random(200, 255));
}
