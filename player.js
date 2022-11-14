class Player {
  constructor(sprite, dim, speed = 5) {
    this.x = windowWidth / 2;
    this.y = windowHeight / 2;
    this.sprite = sprite;
    this.dimensions = dim
    this.collision = {
      w: dim.w + 6,
      h: dim.h + 6,
      mw: dim.mw + 3,
      mh: dim.mh + 3
    }
    this.speed = speed;
  }

  positionInMap(globalX, globalY, mapImage){

  }
}
