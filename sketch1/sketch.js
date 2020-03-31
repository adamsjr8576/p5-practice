function setup() {
  let canvas = createCanvas(640, 480);
  canvas.position(400, 50);
}

function draw() {
  stroke('purple');
  strokeWeight(3);
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}
