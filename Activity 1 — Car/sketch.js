// Function setup() is defined as the starting point, meaning it can only be called ONCE, once the program has started.
function setup() {
  createCanvas(400, 400); // this is the canvas dimension that i used
}

// Function draw() is defined as a function to create animations and interact with users, unlike the function setup, this one runs REPEATEDLY once the program has started.
function draw() {
  background(255); // This is the background color that i used.
  
  fill(66, 167, 245); // This one is the color of the car which is blue.
  
  rect(150, 160, 100, 80); //  This one is the shape and dimensions of the car.
  
  fill(0); // This is the color of the car's wheels.
  
 // These two are the wheels dimensions and shape.
  ellipse(150, 240, 70, 70);
  ellipse(250, 240, 70, 70);
  
  noStroke() // This one is noStroke where there will be no outlines on the drawing.
}