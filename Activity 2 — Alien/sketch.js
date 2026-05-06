function setup() {
  createCanvas(400, 400);
  noStroke();
  background(0);
}

function draw() {
  background(0); // This is the color of the background

  // This is the body of the alien with its shape, color and dimensions.
  ellipse(200, 250, 80, 120); 
  fill(102, 255, 102); 
  

  // This is the head of the alien with its shape, color and dimensions.
  ellipse(200, 160, 100, 100); 
  fill(102, 255, 102);
  

  // These are the eyes of the alien with its shape, color and dimensions.
  ellipse(180, 150, 15, 25); 
  ellipse(220, 150, 15, 25);
  fill(0); 


  // These are the arms of the alien, with its shape, color and dimensions. I made the other one slightly slanted upwards so it looks like he is waving at you LOL.
  rect(140, 220, 20, 60, 15); 
  rect(240, 200, 20, 40, 15); 
  fill(102, 255, 102);
 
  // This is the feet of the alien with its shape, color and dimensions.
  rect(170, 305, 25, 15, 5); 
  rect(210, 305, 25, 15, 5); 
}