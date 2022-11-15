class Artist{
    constructor(questionList, boundingBox){
        this.questionList = questionList
        this.artList = []
        this.boundingBox = boundingBox
        this.questionButtons = []
        this.buttonHideX = -4200
        this.buttonsShown = false
    }

    generateButtons(){
        let increment = (3 * windowWidth / 4) / 6
        let xPad = windowWidth / 10
        let hPos = 0
        for (let question of this.questionList){
            hPos += increment
            let b = createButton(question, xPad + this.buttonHideX, hPos, windowWidth - 2 * xPad)
            this.questionButtons.push(b)
        }
    }

    showButtons(){
        if (this.buttonsShown) return
        this.buttonsShown = true
        for (let b of this.questionButtons) {
            b.x -= this.buttonHideX
        }
    }

    hideButtons(){
        if (!this.buttonsShown) return
        this.buttonsShown = false
        for (let b of this.questionButtons) {
            b.x += this.buttonHideX
        }
    }

    questionChosen(){
        for (let question of this.questionButtons){
            if (question.val) {
                this.hideButtons
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