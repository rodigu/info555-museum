class Question{
    constructor(txt, audio=null){
        this.text = txt;
        this.audio = audio;
    }

    load(){
        if (typeof(this.audio) !== 'string') return true
        this.audio = loadSound(this.audio)
        return false
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