let GUI;
let control = {};
let [velX, velY] = [0, 0];

function setup() {
  createCanvas(windowWidth, windowHeight);
  setupControls();
}

function draw() {
  background("#242038");
  drawGui();
  if (control.joystick.isChanged) {
    // Print a message when Slider 1 is changed
    // that displays its value.
    print(
      control.joystick.label +
        " = {" +
        control.joystick.valX +
        ", " +
        control.joystick.valY +
        "}"
    );
  }

  // Use Joystick's output to change velocity
  velX += control.joystick.valX;
  velY += control.joystick.valY;

  // Draw our ellipse
  fill("#7AA0FF");
  stroke("#FFFFFF");
  ellipse(velX, velY, 100);
}

/// Add these lines below sketch to prevent scrolling on mobile
function touchMoved() {
  // do some stuff
  return false;
}
