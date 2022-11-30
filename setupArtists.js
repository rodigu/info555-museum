function setupArtists(artists){
  createCarol()
  createKenshay()
  createGabrielle()
}

function createGabrielle() {
  
}

function createKenshay() {

}

function createCarol() {
  let carolBounding = [
    getBoundingBox(38,-917,1200,820),
    getBoundingBox(-395, -773, 500, 600)
  ]
  artists.carol = new Artist([
    new Question('who are you', 'assets/audio/tst_audio0.wav'),
    new Question('how old are you', 'assets/audio/tst_audio1.wav')
  ], carolBounding)
  artists.carol.artList.push({
    img: loadImage("assets/art/capychilling.jpg"),
    x: 689,
    y: -657,
    w: 250,
    h: 250
  })
  artists.carol.artList.push({
    img: loadImage("assets/art/bacurau.jpeg"),
    x: 200,
    y: -500,
    w: 250,
    h: 250
  })
  artists.carol.profileImage = loadImage('assets/pug-dog-dancing.gif')
}

function getBoundingBox(x,y,width,height){
  return {
    x:x,
    y:y,
    w:width,
    h:height
  }
}