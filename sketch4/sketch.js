function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function windowResized () {
  resizeCanvas(windowWidth, windowHeight);
}

let diameter = 19;
let weight = 1;
let increase = true;
function draw() {
  clear();
  background(0);
  xCenter = width/2;
  yCenter = height/2;
  if (increase === true) {
    diameter += 3;
    weight += 0.15;
  }
  if (increase === false) {
    diameter -= 3;
    weight -= 0.15;
  }
  if (diameter > width/3) {
    increase = false;
  }
  if (diameter < 20) {
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
