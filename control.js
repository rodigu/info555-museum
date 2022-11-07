function setupControls() {
  GUI = createGui();
  control.joystick = createJoystick(
    "Joystick",
    windowWidth / 2,
    windowHeight / 2,
    100,
    100,
    -1,
    1,
    1,
    -1
  );
  control.joystick.setStyle({
    fillBg: color("#0"),
    rounding: 100,
    handleRadius: 30,
  });
}
