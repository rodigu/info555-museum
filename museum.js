let GUI;
let control = {};
let [globalX, globalY] = [500, 100];
let assetsList = {};
let museumMap;
let player;
let colorCollide = 100;

let menu = {
  isOpen: false,
  currentArtist: null,
};

let artists = {};

let audioPlaying = false;

let midW, midH;

let DO_DEBUG = true;

function preload() {
  soundFormats("wav");
  assetsList.museumMap = loadImage("assets/art/map.jpeg");
  assetsList.player = loadImage("assets/pug-dog-dancing.gif");
  setupArtists(artists);
}

function setup() {
  player = new Player(assetsList.player, {
    w: 40,
    h: 40,
    mw: 20,
    mh: 20,
  });

  setupControls();
  for (let artistName in artists) {
    let artist = artists[artistName];
    artist.generateButtons();
  }

  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  midW = windowWidth / 2;
  midH = windowHeight / 2;
  noStroke();
  p5.disableFriendlyErrors = true;
  textSize(15);
  textAlign(LEFT, TOP);
  textWrap(WORD);
}

function draw() {
  drawMap();

  handleMovement();

  drawArt();

  if (DO_DEBUG) debugCode();

  image(player.sprite, midW, midH, player.dimensions.w, player.dimensions.h);

  globalX += control.joystick.valX;
  globalY += control.joystick.valY;

  handleMenu();

  drawGui();
}

function debugCode() {
  text(frameRate(), 0, 0);

  fill(0);
  ellipse(mouseX, mouseY, 20, 20);
  fill(200, 50, 50, 80);
  rect(
    midW - player.collision.mw,
    midH - player.collision.mh,
    player.collision.w,
    player.collision.h
  );
  for (artistName in artists) {
    let artist = artists[artistName];
    artist.drawBoundingBox();
  }

  if (mouseIsPressed) {
    console.log(mouseX - globalX, mouseY - globalY);
  }
}

/// Add these lines below sketch to prevent scrolling on mobile
function touchMoved() {
  // do some stuff
  return false;
}
