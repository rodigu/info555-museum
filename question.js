class Question{
    constructor(txt, button, audio){
        this.text = txt;
        this.button = button;
        this.audio = audio;
    }

    playAudio(){
        if (audioPlaying) 
            audioPlaying.stop()
        this.audio.play()
    }
}