function setup() {
  createCanvas(windowWidth, windowHeight);
  // noLoop();
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
  // if (increase === true) {
  //   diameter += 2;
  //   weight += 0.15;
  // }
  // if (increase === false) {
  //   diameter -= 2;
  //   weight -= 0.15;
  // }
  // if (diameter > width/3) {
  //   clear();
  //   background(0);
  //   increase = false;
  // }
  // if (diameter < 20) {
  //   clear();
  //   background(0);
  //   increase = true;
  // }
  let seconds = millis() / 1000;
  let duration = 5;
  let anim = seconds / duration % 1;
  const round = sin(anim * PI * 2) * 0.5 + 0.5;
  noFill();
  stroke(255);
  strokeWeight(round * 20);
  circle(xCenter, yCenter, round * 350);
  line(xCenter - round*500, yCenter, xCenter + round*500, yCenter);
  line(xCenter + round*500, yCenter + yCenter/2, xCenter + round*500, yCenter - yCenter/2);
  line(xCenter - round*500, yCenter + yCenter/2, xCenter - round*500, yCenter - yCenter/2);
  line(xCenter, yCenter + round*300, xCenter, yCenter - round*300);
  line(xCenter - xCenter/4, yCenter - round*300, xCenter + xCenter/4, yCenter - round*300);
  line(xCenter - xCenter/4, yCenter + round*300, xCenter + xCenter/4, yCenter + round*300);
  push();
    translate(round*500, 0);
    circle(xCenter, yCenter, 150);
  pop();

  push();
    translate(-round*500, 0);
    circle(xCenter, yCenter, 150);
  pop();

  push();
    translate(0, +round*300);
    circle(xCenter, yCenter, 150);
  pop();

  push();
    translate(0, -round*300);
    circle(xCenter, yCenter, 150);
  pop();
}

function mousePressed() {
  loop();
}

function mouseReleased() {
  noLoop();
}
