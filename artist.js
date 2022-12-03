class Artist {
  constructor(questionList, boundingBox) {
    this.questionList = questionList;
    this.artList = [];
    this.boundingBox = boundingBox;
    this.questionButtons = [];
    this.buttonHideX = -4200;
    this.buttonsShown = false;
    this.increment = (3 * windowWidth) / 4 / 8;
    this.allLoaded = false;
    this.maxQuestions = 6;
  }

  generateButtons() {
    for (let q of this.questionList) q.load();

    let xPad = windowWidth / 10;
    let hPos = this.increment;
    for (let question of this.questionList) {
      hPos += this.increment;
      let b = createButton(
        question.text,
        xPad + this.buttonHideX,
        hPos,
        windowWidth - 2 * xPad
      );
      question.addButton(b);
      this.questionButtons.push(b);
    }
  }

  drawArt() {
    for (let art of this.artList)
      image(art.img, globalX + art.x, globalY + art.y, art.w, art.h);
    if (this.buttonsShown)
      image(
        this.profileImage,
        midW,
        this.increment,
        windowWidth / 5,
        windowWidth / 5
      );
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
      if (
        px - globalX <= boundingBox.x + boundingBox.w &&
        px - globalX >= boundingBox.x - boundingBox.w &&
        py - globalY <= boundingBox.y + boundingBox.h &&
        py - globalY >= boundingBox.y - boundingBox.h
      )
        return true;
    return false;
  }
}
