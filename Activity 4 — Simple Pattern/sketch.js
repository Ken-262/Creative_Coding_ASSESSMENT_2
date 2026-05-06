function setup() {
  createCanvas(400, 400);
  background(255);
  noStroke(); // I removed the strokes of the ellipses.
  noLoop(); // I removed the loop so it would look better, because if I used Loop, it is kinda messy if its running continuously, so I just used this but the color still changes randomly if played repeatedly.
}

function draw() {
  for (let x = 0; x < width; x += 15) { // This one loops through x-axis meaning left to right.
    
    for (let y = 0; y < height; y += 15) { // This one loops through y-axis meaning top to bottom.
      
      fill(random (170, 220), random(160, 235), random(325)); // These are the random colors that will show up everytime the program reruns.
      
      ellipse(x, y, 20, 20); // This one draws the circle in a grid-like position
    }
  } 
}
