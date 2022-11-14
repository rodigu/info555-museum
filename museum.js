let GUI;
let control = {};
let [globalX, globalY] = [500, 100];
let assetsList = {};
let museumMap;
let player;
let colorCollide = 100;

let showing = {
  img: {},
  x: -320,
  y: -100,
};

let menu = {
  isOpen: false,
  currentArtist: null,
};

let audioPlaying = false;

let midW, midH;

const DO_DEBUG = false;

function preload() {
  assetsList.museumMap = loadImage("assets/map.png");
  assetsList.player = loadImage("assets/pug-dog-dancing.gif");
  showing.img = loadImage("assets/job_and_his_daughters.jpg");
}

function setup() {
  player = new Player(assetsList.player, {
    w: 40,
    h: 40,
    mw: 20,
    mh: 20,
  });
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
  drawMap();

  if (DO_DEBUG) debugCode();

  image(player.sprite, midW, midH, player.dimensions.w, player.dimensions.h);
  text(frameRate(), 0, 0);

  globalX += control.joystick.valX;
  globalY += control.joystick.valY;
  let collisionBox = get(
    midW - player.collision.mw,
    midH - player.collision.mh,
    player.collision.w,
    player.collision.h
  );

  collisionBox.loadPixels();
  let collisionPixels = collisionBox.pixels;

  handleMovement(collisionPixels);

  drawGui();
}

function debugCode() {
  fill(0);
  ellipse(mouseX, mouseY, 20, 20);
  fill("red");
  rect(
    midW - player.collision.mw,
    midH - player.collision.mh,
    player.collision.w,
    player.collision.h
  );
}

/// Add these lines below sketch to prevent scrolling on mobile
function touchMoved() {
  // do some stuff
  return false;
}
