function setup() {
  createCanvas(windowWidth, windowHeight);
}

function windowResized () {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(50);

  const xCenter = width/2;
  const yCenter = height/2;

  strokeJoin(ROUND);
  strokeWeight(5);
  stroke(230);
  noFill();

  const seconds = millis()/1000;

  const duration = 20;
  const playhead = seconds/duration % 1;
  const animation = playhead * PI * 2;

  const duration2 = 10;
  const playhead2 = seconds/duration2 % 1;


  let movement = (sin(playhead*PI*2)) * 0.5 + 0.5;
  let movement2 = (sin(playhead2*PI*2)) * 0.5 + 0.5;

  const startX = [xCenter/4, yCenter];
  const endX = [(width - xCenter/4), yCenter];
  const x = lerp(startX[0], endX[0], movement);
  const y = lerp(startX[1], endX[1], movement);

  const startY = [xCenter, yCenter/1.5];
  const endY = [xCenter, (height - yCenter/1.5)];
  const x2 = lerp(startY[0], endY[0], movement);
  const y2 = lerp(startY[1], endY[1], movement);

  const startXY = [200, 200];
  const endXY = [(width - 200), (height - 200)];
  const x3 = lerp(startXY[0], endXY[0], movement);
  const y3 = lerp(startXY[1], endXY[1], movement);

  push();
    strokeWeight(movement2*5 + 1);
    translate(x, y);
    rotate(-animation);
    point(0, 100);
    ellipse(0, 100, movement2* 50 + 20);
    ellipse(0, 100, movement2* 50 + 40);
  pop();

  push();
    strokeWeight(movement2*5 + 1);
    translate(x, y);
    rotate(animation);
    point(0, -100);
    ellipse(0, -100, movement2* 50 + 20);
    ellipse(0, -100, movement2* 50 + 40);
  pop();

  push();
    strokeWeight(movement2*5 + 1);
    translate(x2, y2);
    rotate(animation);
    point(200, 0);
    ellipse(200, 0, movement2* 50 + 20);
    ellipse(200, 0, movement2* 50 + 40);
  pop();

  push();
    strokeWeight(movement2*5 + 1);
    translate(x2, y2);
    rotate(-animation);
    point(-200, 0);
    ellipse(-200, 0, movement2* 50 + 20);
    ellipse(-200, 0, movement2* 50 + 40);
  pop();

  push();
    strokeWeight(movement2*5 + 1);
    translate(x3, y3);
    rotate(animation);
    point(100, -100);
    ellipse(100, -100, movement2* 50 + 20);
    ellipse(100, -100, movement2* 50 + 40);
  pop();

  push();
    strokeWeight(movement2*5 + 1);
    translate(x3, y3);
    rotate(-animation);
    point(-100, 100);
    ellipse(-100, 100, movement2* 50 + 20);
    ellipse(-100, 100, movement2* 50 + 40);
  pop();

  const line1Point1 = [15, 25];
  const line1 = lerp(5, line1Point1[1], movement);

  const line2Point1 = [14, 18];
  const line2 = lerp(5, line2Point1[1], movement2);

  push();
  translate(xCenter, yCenter);
  rotate(-animation*2);
  strokeWeight(3);
  line(0, line1, 0, -line1);
  line(line1, 0, -line1, 0);
  line(-line2, line2, line2, -line2);
  line(line2, line2, -line2, -line2);
  pop();

}
