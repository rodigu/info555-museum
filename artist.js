class Artist {
  constructor(questionList, boundingBox) {
    this.questionList = questionList;
    this.artList = [];
    this.boundingBox = boundingBox;
    this.questionButtons = [];
    this.buttonHideX = -4200;
    this.buttonsShown = false;
    this.increment = (3 * windowWidth) / 4 / 7;
    this.allLoaded = false;
    this.maxQuestions = 6;
    this.shownArt = null
  }

  generateButtons() {
    for (let q of this.questionList) q.load();

    let xPad = windowWidth / 13;
    let hPos = this.increment;
    for (let question of this.questionList) {
      hPos += this.increment;
      let b = createButton(
        question.text,
        xPad + this.buttonHideX,
        hPos,
        windowWidth - 2 * xPad
      );
      b.setStyle({
        textSize: 15,
      });
      question.addButton(b);
      this.questionButtons.push(b);
    }
  }

  addArt(art) {
    let { x, y, w, h, img } = art
    this.artList.push({
      img,
      x: x * zoomOutPct,
      y: y * zoomOutPct,
      w: w * zoomOutPct,
      h: h * zoomOutPct
    })
  }

  drawArt() {
    for (let art of this.artList) {
      image(art.img, globalX + art.x, globalY + art.y, art.w, art.h);
    }

    if (this.buttonsShown)
      image(
        this.profileImage,
        midW,
        this.increment,
        windowWidth / 5,
        windowWidth / 5
      );
  }

  popUpArt() {
    if (!this.shownArt) return
    let { w, h, img } = this.shownArt
    image(img, midW, midH, midW, h * (midW / w))
  }

  showButtons() {
    if (this.buttonsShown) return;
    this.buttonsShown = true;
    for (let b of this.questionButtons) b.x -= this.buttonHideX;
  }

  hideButtons() {
    if (!this.buttonsShown) return;
    this.buttonsShown = false;
    for (let b of this.questionButtons) b.x += this.buttonHideX;
  }

  questionChosen() {
    for (let question of this.questionList) {
      if (question.button.val) {
        this.hideButtons();
        menu.button.val = false
        question.playAudio();
        return true;
      }
    }
    return false;
  }

  drawBoundingBox() {
    fill(200, 50, 50, 80);
    for (let boundingBox of this.boundingBox)
      rect(
        boundingBox.x + globalX,
        boundingBox.y + globalY,
        boundingBox.w,
        boundingBox.h
      );
  }

  playerIsIn(px, py) {
    for (let boundingBox of this.boundingBox)
      if (this.posIsIn(px, py, boundingBox))
        return true;
    this.hideButtons()
    return false;
  }

  posIsIn(x, y, boundary, withGlobal=true) {
    let gx = withGlobal ? globalX : 0
    let gy = withGlobal ? globalY : 0

    return (
      x - gx <= boundary.x + boundary.w && 
      x - gx >= boundary.x &&
      y - gy <= boundary.y + boundary.h &&
      y - gy >= boundary.y
    )
  }
}
