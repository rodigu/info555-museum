function setupControls() {
  GUI = createGui();
  control.joystick = createJoystick(
    "Joystick",
    windowWidth / 2 - 50,
    (3 * windowHeight) / 4,
    100,
    100,
    5,
    -5,
    -5,
    5
  );
  control.joystick.setStyle({
    fillBg: color("#0"),
    rounding: 100,
    handleRadius: 30,
  });
  
  menu.button = createToggle('💬', control.joystick.x + 100, control.joystick.y, 35, 35)
  menu.button.setStyle({
    fillBg: color(0,0,0,0),
    strokeWeight: 0,
    rounding: 20
  })
}

function handleMovement(collisionPixels){
  if (control.joystick.valX !== 0 && control.joystick.valY !== 0) {
    let rightCollision = collisionPixels.slice(4 * (player.collision.w * player.collision.mh - 1), 4 * (player.collision.w * player.collision.mh - 1) + 3)
    if (rightCollision.reduce((a, b) => a + b, 0) <= colorCollide) {
      globalX += player.speed;
    }
  
    let leftCollision = collisionPixels.slice(4 * (player.collision.w * player.collision.mh), 4 * (player.collision.w * player.collision.mh) + 3)
    if (leftCollision.reduce((a, b) => a + b, 0) <= colorCollide) {
      globalX -= player.speed;
    }
  
    let topCollision = collisionPixels.slice(4 * player.collision.mw, 4 * player.collision.mw + 3)
    if (topCollision.reduce((a, b) => a + b, 0) <= colorCollide) {
      globalY -= player.speed;
    }
  
    let bottomCollision = collisionPixels.slice(4 * (player.collision.h * player.collision.w - player.collision.mw), 4 * (player.collision.h * player.collision.w - player.collision.mw) + 3)
    if (bottomCollision.reduce((a, b) => a + b, 0) <= colorCollide) {
      globalY += player.speed;
    }
  }
}

function handleMenu(){
  
}