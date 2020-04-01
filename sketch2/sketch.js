function setup() {
  let canvas = createCanvas(640, 480);
  canvas.position(400, 50);
}

let backgroundValue = 210;
let strokeValue = 0;

function draw() {
  background(backgroundValue);
  strokeWeight(5);
  stroke(strokeValue);
  fill(backgroundValue);
  strokeJoin(ROUND);
  smooth();

  let triWidth = width/2;
  const xCenter = width/2;
  const yCenter = height/2;

  triangle(xCenter/2,
    yCenter + yCenter/2,
    xCenter/2 + triWidth,
    yCenter + yCenter/2,
    xCenter,
    yCenter/2);
  circle(xCenter, yCenter + yCenter/2 - triWidth/3.76, triWidth/1.88);
  line(xCenter, yCenter/2, xCenter, yCenter + yCenter/2);
}

function mouseClicked() {
  backgroundValue === 210? backgroundValue = 0 : backgroundValue = 210;
  strokeValue === 0? strokeValue = 255 : strokeValue = 0;
}
