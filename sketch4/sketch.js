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
  noFill();
  stroke(255);
  strokeWeight(weight);
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
  if (diameter > width/2.5) {
    clear();
    background(0);
    increase = false;
  }
  if (diameter < 20) {
    clear();
    background(0);
    increase = true;
  }
  circle(xCenter, yCenter, diameter);
  line(xCenter/4, yCenter, diameter, yCenter);
  line(xCenter*1.75, yCenter, width - diameter, yCenter);
  line(xCenter, yCenter/4, xCenter, diameter/2);
  line(xCenter, yCenter/6, xCenter, diameter/2);
  line(xCenter, yCenter*1.85, xCenter, height - diameter/2);
}

function mousePressed() {
  loop();
}

function mouseReleased() {
  noLoop();
}
