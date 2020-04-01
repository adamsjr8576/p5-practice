function setup() {
  let canvas = createCanvas(640, 480);
  canvas.position(400, 50);
}

function draw() {
  background(210, 210, 210);
  strokeWeight(5);
  fill(210, 210, 210);

  let triWidth = width/2;
  const xCenter = width/2;
  const yCenter = height/2;

  triangle(xCenter/2, yCenter + yCenter/2, xCenter/2 + triWidth, yCenter + yCenter/2, xCenter, yCenter/2);

  circle(xCenter, yCenter + yCenter/2 - triWidth/3.76, triWidth/1.88);

  line(xCenter, yCenter/2, xCenter, yCenter + yCenter/2);
}
