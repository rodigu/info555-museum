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
