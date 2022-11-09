let GUI;
let control = {};
let [globalX, globalY] = [500, 100];
let assetsList = {}
let museumMap;
let player;

let showing = {
  img: {},
  x: -320,
  y: -100
}

let menu = {
  isOpen: false,
  currentArtist: null
}

let midW, midH;

const DO_DEBUG = false

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
  p5.disableFriendlyErrors = true;
  textSize(20);
  textAlign(LEFT, TOP);
}

function draw() {
  background("white");
  image(museumMap, globalX, globalY, 1000, 1000);
  // fill(0)
  // ellipse(mouseX, mouseY, 20, 20)
  // fill('red')
  // rect(midW - playerCol.mw, midH - playerCol.mh, playerCol.w, playerCol.h)
  image(playerSprite, midW, midH, playerDim.w, playerDim.h);
  text(frameRate(), 0, 0);

  globalX += control.joystick.valX;
  globalY += control.joystick.valY;
  let collisionBox = get(midW - playerCol.mw, midH - playerCol.mh, playerCol.w, playerCol.h)

  collisionBox.loadPixels()
  let collisionPixels = collisionBox.pixels
  // console.log(collisionBox.pixels.length / 4) 1681
  if (control.joystick.valX !== 0 && control.joystick.valY !== 0) {
    let rightCollision = collisionPixels.slice(4 * (playerCol.w * playerCol.mh - 1), 4 * (playerCol.w * playerCol.mh - 1) + 3)
    // rightCollision = get(midW + 21, midH).slice(0, 3);
    if (rightCollision.reduce((a, b) => a + b, 0) <= 120) {
      globalX += 5;
    }
  
    let leftCollision = collisionPixels.slice(4 * (playerCol.w * playerCol.mh), 4 * (playerCol.w * playerCol.mh) + 3)
    // leftCollision = get(midW - 21, midH).slice(0, 3);
    if (leftCollision.reduce((a, b) => a + b, 0) <= 120) {
      globalX -= 5;
    }
  
    let topCollision = collisionPixels.slice(4 * playerCol.mw, 4 * playerCol.mw + 3)
    // topCollision = get(midW, midH - 21).slice(0, 3);
    if (topCollision.reduce((a, b) => a + b, 0) <= 120) {
      globalY -= 5;
    }
  
    let bottomCollision = collisionPixels.slice(4 * (playerCol.h * playerCol.w - playerCol.mw), 4 * (playerCol.h * playerCol.w - playerCol.mw) + 3)
    // bottomCollision = get(midW, midH + 21).slice(0, 3);
    // console.log([...bottomCollision])
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
