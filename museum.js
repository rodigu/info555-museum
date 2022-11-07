let GUI;
let control = {};
let [globalX, globalY] = [-150, -150];
let museumMap;
let playerSprite;

let midW, midH;

function preload() {
  museumMap = loadImage("assets/blueprint.jpeg");
  museumMap.loadPixels();
  playerSprite = loadImage("assets/pug-dog-dancing.gif");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  setupControls();
  imageMode(CENTER);
  midW = windowWidth / 2;
  midH = windowHeight / 2;
}

function draw() {
  background("black");
  image(museumMap, globalX, globalY, 10_000, 10_400);
  image(playerSprite, midW, midH, 80, 80);
  drawGui();

  // Use Joystick's output to change velocity
  globalX += control.joystick.valX;
  globalY += control.joystick.valY;

  rightCollision = get(midW + 81, midH).slice(0, 3);
  leftCollision = get(midW - 81, midH).slice(0, 3);
  topCollision = get(midW, midH - 81).slice(0, 3);
  bottomCollision = get(midW, midH + 81).slice(0, 3);

  console.log(leftCollision);
  if (topCollision.reduce((a, b) => a + b, 0) <= 50) {
    globalY -= 5;
  }
  if (bottomCollision.reduce((a, b) => a + b, 0) <= 50) {
    globalY += 5;
  }
  if (leftCollision.reduce((a, b) => a + b, 0) <= 50) {
    globalX -= 5;
  }
  if (rightCollision.reduce((a, b) => a + b, 0) <= 50) {
    globalX += 5;
  }
  // console.log(
  //   get(mouseX, mouseY)
  //     .slice(0, 3)
  //     .reduce((a, b) => a + b, 0)
  // );

  // Draw our ellipse
  fill("#7AA0FF");
  stroke("#FFFFFF");
}

/// Add these lines below sketch to prevent scrolling on mobile
function touchMoved() {
  // do some stuff
  return false;
}
