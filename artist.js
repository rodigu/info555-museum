class Artist{
    constructor(questionList, boundingBox){
        this.questionList = questionList
        this.artList = []
        this.boundingBox = boundingBox
        this.questionButtons = []
        this.buttonHideX = -4200
        this.buttonsShown = false
        this.increment = (3 * windowWidth / 4) / 8
    }

    generateButtons(){
        let xPad = windowWidth / 10
        let hPos = this.increment
        for (let question of this.questionList){
            hPos += this.increment
            let b = createButton(question.text, xPad + this.buttonHideX, hPos, windowWidth - 2 * xPad)
            question.addButton(b)
            this.questionButtons.push(b)
        }
    }

    drawArt(){
        if (this.buttonsShown)
            image(this.profileImage, midW, this.increment, windowWidth / 5, windowWidth / 5)
        for (let art of this.artList)
            image(art.img, globalX + art.x, globalY + art.y, 180, 120)
    }

    showButtons(){
        if (this.buttonsShown) return
        this.buttonsShown = true
        for (let b of this.questionButtons)
            b.x -= this.buttonHideX
    }

    hideButtons(){
        if (!this.buttonsShown) return
        this.buttonsShown = false
        for (let b of this.questionButtons)
            b.x += this.buttonHideX
    }

    questionChosen(){
        for (let question of this.questionList){
            if (question.button.val) {
                this.hideButtons()
                question.playAudio()
                return true
            }
        }
        return false
    }

    drawBoundingBox(){
        fill(200,50,50,80)
        rect(this.boundingBox.x + globalX, this.boundingBox.y + globalY, this.boundingBox.w, this.boundingBox.h)
    }

    playerIsIn(px, py){
        if (px - globalX <= this.boundingBox.x + this.boundingBox.w &&
            px - globalX >= this.boundingBox.x - this.boundingBox.w &&
            py - globalY <= this.boundingBox.y + this.boundingBox.h &&
            py - globalY >= this.boundingBox.y - this.boundingBox.h)
            return true
        return false
    }
}