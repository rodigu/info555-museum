class Question{
    constructor(txt, audio=null){
        this.text = txt;
        this.audio = audio;
    }

    playAudio(){
        if (!this.audio) return
        if (audioPlaying) 
            audioPlaying.stop()
        this.audio.play()
        audioPlaying = this.audio
    }

    addButton(button) {
        this.button = button;
    }
}