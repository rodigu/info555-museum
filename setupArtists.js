function setupArtists(artists){
  createCarol()
  createKenshay()
  createGabrielle()
}

function createGabrielle() {
  let gabBounding = [
    getBoundingBox(38,-917,1200,820),
    getBoundingBox(-395, -773, 500, 600)
  ]
  artists.gab = new Artist([
    new Question('who are you', 'assets/audio/tst_audio0.wav'),
    new Question('how old are you', 'assets/audio/tst_audio1.wav')
  ], gabBounding)
  artists.gab.artList.push({
    img: loadImage("assets/art/nvshu.jpeg"),
    x: -1000,
    y: -1441,
    w: 300,
    h: 250
  })
  artists.gab.artList.push({
    img: loadImage("assets/art/tattoo.jpeg"),
    x: -600,
    y: -1441,
    w: 250,
    h: 250
  })
  artists.gab.profileImage = loadImage('assets/pug-dog-dancing.gif') // image of the artist 
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