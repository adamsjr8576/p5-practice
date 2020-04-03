function setup() {
  createCanvas(windowWidth, windowHeight);
}

function windowResized () {
  resizeCanvas(windowWidth, windowHeight);
}

let diameter = 19;
let weight = 1;
let increase = true;
function draw() {
  background(0);
  xCenter = width/2;
  yCenter = height/2;
  if (increase === true) {
    diameter += 2;
    weight += 0.15;
  }
  if (increase === false) {
    diameter -= 2;
    weight -= 0.15;
  }
  if (diameter > width/3) {
    clear();
    background(0);
    increase = false;
  }
  if (diameter < 20) {
    clear();
    background(0);
    increase = true;
  }
  noFill();
  stroke(255);
  strokeWeight(weight);
  circle(xCenter, yCenter, diameter);
}

function mousePressed() {
  loop();
}

function mouseReleased() {
  noLoop();
}
