class Question{
    constructor(txt, audio=''){
        this.text = txt;
        this.audio = audio;
    }

    playAudio(){
        if (audioPlaying) 
            audioPlaying.stop()
        this.audio.play()
        audioPlaying = this.audio
    }

    addButton(button) {
        this.button = button;
    }
}