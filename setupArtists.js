function setupArtists(artists){
  let boundingTest = getBoundingBox(-450,-440,250,520)
  artists.testArtist = new Artist([
      new Question('who are you', loadSound('assets/audio/tst_audio0.mp3')),
      new Question('how old are you', loadSound('assets/audio/tst_audio1.mp3'))
    ], boundingTest)
  artists.testArtist.artList.push({
    img: loadImage("assets/job_and_his_daughters.jpg"),
    x: -320,
    y: -100,
  })
  artists.testArtist.profileImage = loadImage('assets/pug-dog-dancing.gif')
}

function getBoundingBox(x,y,width,height){
  return {
    x:x,
    y:y,
    w:width,
    h:height
  }
}