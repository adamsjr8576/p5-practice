function setup() {
  createCanvas(windowWidth, windowHeight);

  noLoop();
}

function windowResized () {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  blendMode(BLEND);
  blendMode(DIFFERENCE);
  background(0);
  fill(255);
  noStroke();

  let xCenter = width/2;
  let yCenter = height/2;

  const size = min(width, height) * 0.5;
  rectMode(CENTER);
  rect(xCenter, yCenter, size, size);

  push()
    translate(size/2.2, -size/2.2 );
    circle(xCenter, yCenter, size);
  pop()

  push()
    translate(-size/2, -size/2.2);
    circle(xCenter, yCenter, size);
  pop()

  push()
    triangle(xCenter - size/3, yCenter - size/3, xCenter + size/3, yCenter - size/3, xCenter, yCenter + size/3);
  pop()

  push()
    translate(0, size/2.4);
    rect(xCenter, yCenter, size*3, size/6);
  pop()

  push()
    stroke(255);
    strokeWeight(5);
    line(xCenter, 0, xCenter - (size+5), yCenter);
    line(xCenter, 0, xCenter - (size+200), yCenter);
    line(xCenter, 0, xCenter + (size+5), yCenter);
    line(xCenter, 0, xCenter + (size+200), yCenter);
  pop()

  push()
    translate(0, size/1.716);
    circle(xCenter, yCenter, size/2);
  pop()

  push()
    translate(-size, size/1.716);
    circle(xCenter, yCenter, size/2);
  pop()

  push()
    translate(size, size/1.716);
    circle(xCenter, yCenter, size/2);
  pop()

  push()
    stroke(255);
    strokeWeight(5);
    line(xCenter - (size+5), yCenter, xCenter + size/2, height);
    line(xCenter + (size+5), yCenter, xCenter - size/2, height);
    line(xCenter - (size+200), yCenter, xCenter - size/2, height);
    line(xCenter + (size+200), yCenter, xCenter + size/2, height);
  pop()
}
