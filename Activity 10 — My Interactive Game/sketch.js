// These are the functions that I used in my game. Just like what is in the lecture, ball x and y are defined as the position of the balls, ballSpeed x and y determines how fast the ball moves, while paddle x and w are defined as the horizontal position and the width of the paddle.
let ballX, ballY, ballSpeedX, ballSpeedY;
let paddleX, paddleW;

// This is the starting point of the score.
let score = 0;

// For this one, titlescreen is a user defined variable which I made so that there will be a title page that will be seen, gameOver is a pre-defined function where it will determine if the program is gonna run or stop.
let titlescreen = false;
let gameOver = false;

// This is where the game will be called if the game is about to start.
function setup() {
  createCanvas(500, 500);
  startGame();
}

function draw() {

  background(30);

  // This is the title screen.
  if (titlescreen == false) {
    
    // These are the dimensions of the Title Page.
    fill(255, 223, 120); 
    textAlign(CENTER);
    textSize(40);
    text("SAVE THE BALL!", width / 2, height / 2 - 40);

    fill(255);
    textSize(20);
    text("Click to Start", width / 2, height / 2);
  }

  else {

    // This is the Game Over page.
    if (gameOver == true) {
      
      // These are the dimensions of the Game Over page.
      fill(255, 223, 120);
      textAlign(CENTER);
      textSize(48);
      text("You Died!", width / 2, height / 2 - 20);

      fill(255);
      textSize(24);
      text("Click to Try Again", width / 2, height / 2 + 20);
      text("Your Score: " + score, width / 2, height / 2 + 50);
    }

    // This is the flow of the game.
    else {

      // This part is the combined element of the ball position and the speed of the ball.
      ballX += ballSpeedX;
      ballY += ballSpeedY;

      
      // This one is if the ball hits the wall, that is why its negative so it will bounce back either left or right.
      if (ballX < 0 || ballX > width) {
        ballSpeedX *= -1;
      }

      // Same thing here, but it bounces upwards.
      if (ballY < 0) {
        ballSpeedY *= -1;
      }

      
      // This here, just like in Mouse Trails, it follows the paddle from left to right, but since I'm using constrain, it will not follow the mouse cursor if I hover it upwards or in any motion, since constrain is used to set a fixed position for an element, that is why it only follows a certain range. (based on what I understand).
      paddleX = constrain(mouseX, 0, width - paddleW);

      // This one is if the ball collides with the paddle.
      if (
        ballX > paddleX &&
        ballX < paddleX + paddleW &&
        ballY + 10 >= height - 20
      ) {
        ballSpeedY *= -1; // This one will hit the ball upwards if it hits the paddle.
        score++; // Once the ball successfully hits the paddle, a single point of score would be added.
      }

      // This one here, if the ball did not hit the paddle, the game will be over.
      if (ballY > height) {
        gameOver = true;
      }

      // This is the dimensions and palette of the ball.
      fill(173, 216, 230);
      ellipse(ballX, ballY, 20);

      // This is the dimensions and palette of the paddle.
      fill(255, 223, 120);
      rect(paddleX, height - 20, paddleW, 10);

      // This one is the dimensions of the Score text.
      fill(255, 223, 120);
      textSize(20);
      textAlign(LEFT);
      text("Score: " + score, 10, 20);
    }
  }
}

// This one will act like the interactivities, mousePressed() function is used when theres a certain element, variable, or function that needs to be interacted with.
function mousePressed() {

  // This one is the title screen, if the conditions are met just like what is shown on the LINE 9, the game will proceed and start the game, otherwise it will not start.
  if (titlescreen == false) {
    titlescreen = true;
  }

  // Same thing here, but this one is for Game Over. If conditions are met just like what is shown on the LINE 10, the game will ask the user to play the game again, otherwise it will not proceed.
  else {
    if (gameOver == true) {
      startGame();
    }
  }
}

// This is the controls of the paddle and the ball.
function startGame() {

  // These are the starting point of the ball on where it will drop.
  ballX = width / 2;
  ballY = height / 2;
  
  // This is the speed of the ball, I made it kinda fast and made the paddle kinda small so its more challenging and exciting.
  ballSpeedX = 7;
  ballSpeedY = 7;
  paddleW = 50;

  // This is the starting point of the score, it will start to 0 and then it will increase. If lost you will receive your total score.
  score = 0;

  // These are the two important things for the game to progress, just like what I've mentioned above, if the conditions are met for the titlescreen, it will then start the game, then for the gameOver, if the conditions are met, the players are asked to play the game again, otherwise the game will not run or proceed.
  titlescreen = false;
  gameOver = false;
  
}