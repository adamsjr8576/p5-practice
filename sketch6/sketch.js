function setup() {
  createCanvas(windowWidth, windowHeight);
}

function windowResized () {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  redraw();
  background(230);

  const xCenter = width/2;
  const yCenter = height/2;

  strokeJoin(ROUND);
  strokeWeight(5);
  stroke(0);
  noFill();

  const seconds = millis()/1000;

  const duration4 = 40;
  const playhead4 = seconds/duration4 % 1;
  const animation4 = playhead4*PI*2;

  const duration1 = 20;
  const playhead1 = seconds/duration1 % 1;
  const animation1 = playhead1*PI*2;

  const duration2 = 10;
  const playhead2 = seconds/duration2 % 1;
  const animation2 = playhead2*PI*2;

  const duration3 = 5;
  const playhead3 = seconds/duration3 % 1;
  const animation3 = playhead3*PI*2;

  push();
  noStroke();
  fill('rgba(0, 0, 250, 0.5)');
  translate(xCenter-xCenter/4, yCenter);
  rotate(-animation1);
  rectMode(CENTER);
  rect(0, 0, 300, 300);
  pop();

  push();
  noStroke();
  fill('rgba(0, 100, 200, 0.5)');
  translate(xCenter-xCenter/4, yCenter);
  rotate(animation4);
  rectMode(CENTER);
  rect(-250, 250, 200, 200);
  pop();

  push();
  noStroke();
  fill('rgba(0, 0, 250, 0.5)')
  translate(xCenter+xCenter/4, yCenter);
  rotate(animation1);
  rectMode(CENTER);
  rect(0, 0, 300, 300);
  pop();

  push();
  noStroke();
  fill('rgba(0, 100, 200, 0.5)')
  translate(xCenter+xCenter/4, yCenter);
  rotate(-animation4);
  rectMode(CENTER);
  rect(250, 250, 200, 200);
  pop();

  push();
  strokeWeight(8);
  stroke('rgba(250, 0, 0, 0.5)')
  translate(xCenter, yCenter);
  rotate(animation2);
  line(0, -yCenter/4, 0, +yCenter/4);
  pop();

  push();
  strokeWeight(8);
  stroke('rgba(250, 0, 0, 0.5)')
  translate(xCenter, yCenter);
  rotate(-animation2);
  line(0, -yCenter/4, 0, +yCenter/4);
  pop();

  push();
  strokeWeight(8);
  stroke('rgba(250, 0, 0, 0.5)')
  translate(xCenter, yCenter);
  rotate(animation1);
  line(0, yCenter-100, 0, yCenter-25);
  pop();

  push();
  strokeWeight(8);
  stroke('rgba(250, 0, 0, 0.5)')
  translate(xCenter, yCenter);
  rotate(-animation1);
  line(0, yCenter-100, 0, yCenter-25);
  pop();

  push();
  strokeWeight(8);
  stroke('rgba(250, 0, 0, 0.5)')
  translate(xCenter, yCenter);
  rotate(animation1);
  triangle(-50, 150, 50, 150, 0, 250)
  pop();

  push();
  strokeWeight(8);
  stroke('rgba(250, 0, 0, 0.5)')
  translate(xCenter, yCenter);
  rotate(-animation1);
  triangle(-50, 150, 50, 150, 0, 250)
  pop();

  push();
  strokeWeight(8);
  stroke('rgba(250, 0, 0, 0.5)')
  translate(xCenter, yCenter);
  rotate(-animation2);
  circle(0, 185, 50, 50);
  pop();

  push();
  strokeWeight(8);
  stroke('rgba(250, 0, 0, 0.5)')
  translate(xCenter, yCenter);
  rotate(animation2);
  circle(0, 185, 50, 50);
  pop();

  push();
  strokeWeight(8);
  stroke('rgba(250, 0, 0, 0.5)')
  translate(xCenter, yCenter);
  rotate(-animation2);
  circle(0, -185, 50, 50);
  pop();

  push();
  strokeWeight(8);
  stroke('rgba(250, 0, 0, 0.5)')
  translate(xCenter, yCenter);
  rotate(animation2);
  circle(0, -185, 50, 50);
  pop();

  push();
  strokeWeight(8);
  stroke('rgba(250, 0, 0, 0.5)')
  translate(xCenter, yCenter);
  rotate(animation1);
  line(-140, -530, 140, -530);
  pop();

  push();
  strokeWeight(8);
  stroke('rgba(250, 0, 0, 0.5)')
  translate(xCenter, yCenter);
  rotate(-animation1);
  line(-140, -530, 140, -530);
  pop();

}
