let GUI;
let control = {};
let assetsList = {};
let museumMap;
let player;
let colorCollide = 100;
let zoomOutPct = .6
let [globalX, globalY] = [500 * zoomOutPct, 100 * zoomOutPct];

let menu = {
  isOpen: false,
  currentArtist: null,
};

let artists = {};

let audioPlaying = false;

let midW, midH;

let DO_DEBUG = false;

function preload() {
  soundFormats("wav");
  assetsList.museumMap = loadImage("assets/art/map.jpeg");
  assetsList.player = loadImage("assets/pug-dog-dancing.gif");
  setupArtists(artists);
}

function setup() {
  getAudioContext().suspend();
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
  userStartAudio();

}

function draw() {
  drawMap();

  handleMovement();
  drawArt();
  museumMinimap()
  
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

function mousePressed() {
  for (let artistName in artists){
    let artist = artists[artistName]
    if (!control.joystick.isChanged){
      if (artist.shownArt){
        artist.shownArt = null
        return
      }
      artist.shownArt = null
    }
    for (let art of artist.artList){
      if (!artist.shownArt && artist.posIsIn(mouseX, mouseY, { x: art.x - art.w / 2, y: art.y - art.h / 2, w: art.w, h: art.h }))
        artist.shownArt = art
    }
  }
}

/// Add these lines below sketch to prevent scrolling on mobile
function touchMoved() {
  // do some stuff
  return false;
}
