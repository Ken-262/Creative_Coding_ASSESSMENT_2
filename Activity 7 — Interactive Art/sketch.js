
function setup() {
  createCanvas(500, 500);
  background(225);
}

function draw() {
  
  ellipse(mouseX, mouseY, random(20, 40)); // This one is the dimensions of the bubble. I used mouseX and mouseY so that it will follow my mouse and create a trail. And random is used here so that it will actually look like a real bubble where its sizes changes per second.
  
  fill(170, 205, 220); // light blue color palette.
     
  stroke(129, 166, 198); // kind of dark-ish blue stroke that would match the bubble.
  
}

// I used random here because I want the background to change everytime I click it, and I want it to match the color of the bubbles so I chose pastel and set its palette to 200 to 255, because 0 value is considered as very dark color, but it gets lighter the more higher the value is, which is the max value of it is 255 which is the lightest color that's why I set it to 200 to 255 to make a pastel-ish type of color and set it to random so that every color that is in that range of palette will be applied everytime I click the background.
function mousePressed() {
  background(random(200, 255), random(200, 255), random(200, 255));
}
