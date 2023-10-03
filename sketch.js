let balls = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(50);
  textAlign(CENTER, CENTER);
  textFont('Geogia');
  frameRate(1); 
}

function draw() {
  background(0);
  displayClock();
  displayBalls();
  addRandomBall(); 
}

function displayClock() {
  fill(255);
  text(getTime(), width / 2, height -50);
}

function getTime() {
  return  '+'+ nf(hour(), 2) + nf(minute(), 2) + nf(second(), 2);
}

function addRandomBall() {
  balls.push({
    x: random(width),
    y: random(height),
    size: random(0, 50),
    color: color(random(255), random(255), random(255))
    });
}

function displayBalls() {
  for (let i = 0; i < balls.length; i++) {
    let ball = balls[i];// array front
    fill(ball.color);
    noStroke();
    ellipse(ball.x, ball.y, ball.size);
  }
}
