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
}

function draw() {
  if (control.joystick.isHeld) {
    background("white");
    image(museumMap, globalX, globalY, 1000, 1000);
    image(playerSprite, midW, midH, 40, 40);
    globalX += control.joystick.valX;
    globalY += control.joystick.valY;

    rightCollision = get(midW + 21, midH).slice(0, 3);
    leftCollision = get(midW - 21, midH).slice(0, 3);
    topCollision = get(midW, midH - 21).slice(0, 3);
    bottomCollision = get(midW, midH + 21).slice(0, 3);
    if (topCollision.reduce((a, b) => a + b, 0) <= 120) {
      globalY -= 5;
    }
    if (bottomCollision.reduce((a, b) => a + b, 0) <= 120) {
      globalY += 5;
    }
    if (leftCollision.reduce((a, b) => a + b, 0) <= 120) {
      globalX -= 5;
    }
    if (rightCollision.reduce((a, b) => a + b, 0) <= 120) {
      globalX += 5;
    }
  }
  drawGui();

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
