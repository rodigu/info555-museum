function setupArtists(artists) {
  createCarol();
  createKenshay();
  createGabrielle();
}

function createGabrielle() {
  let gabBounding = [
    getBoundingBox(-1000,-917,0,820)
  ]
  
  artists.gab = new Artist(
    [
      new Question("who are you", "assets/audio/tst_audio0.wav"),
      new Question("how old are you", "assets/audio/tst_audio1.wav"),
    ],
    gabBounding
  );

  artists.gab.artList.push({
    img: loadImage("assets/art/nvshu.jpeg"),
    x: -1100,
    y: -1441,

    w: 550,
    h: 400
  })

  artists.gab.artList.push({
    img: loadImage("assets/art/tattoo.jpeg"),
    x: -600,
    y: -1441,

    w: 460,
    h: 630
  })
  artists.gab.profileImage = loadImage('assets/art/gab.jpg') // image of the artist 
}

function createKenshay() {}

function createCarol() {
  let carolBounding = [
    getBoundingBox(38, -917, 1200, 820),
    getBoundingBox(-395, -773, 500, 600),
  ];
  artists.carol = new Artist(
    [
      new Question("Who are you?", "assets/audio/carol-who_are_you.mp3"),
      new Question(
        "Why did you create the piece cappychilling?",
        "assets/audio/carol-capychillling.mp3"
      ),
      new Question(
        "Why did you createthe piece bacurau?",
        "assets/audio/carol-bacural.mp3"
      ),
      new Question(
        "Do you struggle to enjoy your own art?",
        "assets/audio/carol-struggling_to_like_your_own_art.mp3"
      ),
      new Question(
        "What is your creative process?",
        "assets/audio/carol-what_your_creative_process.mp3"
      ),
      new Question(
        "Why do you continue to make art?",
        "assets/audio/carol-keep_making_art.mp3"
      ),
      new Question(
        "How do you want people to feel?",
        "assets/audio/carol-what_you_want_ppl_feel.mp3"
      ),
      new Question(
        "What do you want people to know about you?",
        "assets/audio/carol-something_about_you_and_your_art.mp3"
      ),
    ],
    carolBounding
  );
  artists.carol.artList.push({
    img: loadImage("assets/art/capychilling.jpg"),
    x: 689,
    y: -657,
    w: 250,
    h: 250,
  });
  artists.carol.artList.push({
    img: loadImage("assets/art/bacurau.jpeg"),
    x: 200,
    y: -500,
    w: 250,
    h: 250,
  });
  artists.carol.profileImage = loadImage("assets/pug-dog-dancing.gif");
}

function getBoundingBox(x, y, width, height) {
  return {
    x: x,
    y: y,
    w: width,
    h: height,
  };
}
