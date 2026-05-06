// The data that I used here came from a reliable source on the internet.
// No fake informations are shown here.
let table;
function preload() {
  table = loadTable('Most Played Games on Steam in 2024 - Sheet1.csv', 'csv', 'header'); // This one loads the csv file that I made through sheets with factual informations.
}

function setup() {
  createCanvas(500, 500);
  background(180, 220, 255);
  let barWidth = 95; // The width of my bars on how wide or big it looks.
  for (let i = 0; i < table.getRowCount(); i++) {

    let game = table.getString(i, 'Top Games'); // Calls and Gets the games in the CSV file.
    let players = table.getNum(i, 'No. of Players'); // Gets the population of the players in the CSV file.
    
    let x = 30 + i * (barWidth + 20);
    let h = map(players, 900000, 2500000, 90, height - 100);

    fill(255, 230, 150); // Color of the bars that I used.
    noStroke(); // I removed the strokes so it would look clean.
    rect(x, height - h, barWidth, h);
    
   // Text alignment and color.
    fill(255);
    textAlign(CENTER);
    textSize(12);

    text(game, x + barWidth / 2, height - h - 25); // Game name on the bar.
    text(players, x + barWidth / 2, height - h - 50); // Player count on the bar.
  }
}
