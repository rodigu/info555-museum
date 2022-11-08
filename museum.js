let GUI;
let control = {};
let [globalX, globalY] = [300, 200];
let museumMap;
let playerSprite;

let midW, midH;

function preload() {
  museumMap = loadImage("assets/map.png");
  museumMap.loadPixels();
  playerSprite = loadImage("assets/pug-dog-dancing.gif");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  setupControls();
  imageMode(CENTER);
  midW = windowWidth / 2;
  midH = windowHeight / 2;
  noStroke();
  frameRate(30);
  p5.disableFriendlyErrors = true;
}

function draw() {
  background("white");
  image(museumMap, globalX, globalY, 1000, 1000);
  image(playerSprite, midW, midH, 40, 40);

  globalX += control.joystick.valX;
  globalY += control.joystick.valY;

  if (control.joystick.valX < 0) {
    rightCollision = get(midW + 21, midH).slice(0, 3);
    if (rightCollision.reduce((a, b) => a + b, 0) <= 120) {
      globalX += 5;
    }
  }
  if (control.joystick.valX > 0) {
    leftCollision = get(midW - 21, midH).slice(0, 3);
    if (leftCollision.reduce((a, b) => a + b, 0) <= 120) {
      globalX -= 5;
    }
  }
  if (control.joystick.valY > 0) {
    topCollision = get(midW, midH - 21).slice(0, 3);
    if (topCollision.reduce((a, b) => a + b, 0) <= 120) {
      globalY -= 5;
    }
  }
  if (control.joystick.valY < 0) {
    bottomCollision = get(midW, midH + 21).slice(0, 3);
    if (bottomCollision.reduce((a, b) => a + b, 0) <= 120) {
      globalY += 5;
    }
  }
  drawGui();

  // fill("red");
  // ellipse(mouseX, mouseY, 20, 20);

  // Use Joystick's output to change velocity

  // console.log(
  //   get(mouseX, mouseY)
  //     .slice(0, 3)
  //     .reduce((a, b) => a + b, 0)
  // );

  // Draw our ellipse
  // rectMode(CENTER);
  // fill("red");
  // ellipse(midW, midH, 20, 20);
}

/// Add these lines below sketch to prevent scrolling on mobile
function touchMoved() {
  // do some stuff
  return false;
}
