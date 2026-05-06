// This is for loading the image
var pic;
function preload() {
  pic = loadImage("Taenini.png");
}

function setup() {
  createCanvas(500, 500);
  noStroke();
}
 // This is for the image dimensions and filter
function draw() {
  background(250, 236, 243);
  image(pic, 140, 140, 200, 210);
  filter(BLUR, 1);

  // This is the watercolor effect with its color palette
  for (let i = 0; i < 1000; i++); {
    noStroke();
    fill(255, 170, 200, 45);
    let x = random(160, 320);
    let y = random(160, 320);
    ellipse(x, y, random(20, 50));
   
    // This is for the ellipse around the pic
    noFill();
    stroke(245, 160, 170);
    strokeWeight(2);
    ellipse(240, 245, 205, 205);
  }
}
