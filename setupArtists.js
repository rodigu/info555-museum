function setupArtists(artists) {
  createCarol();
  createKenshay();
  createGabrielle();
}

function createGabrielle() {
<<<<<<< Updated upstream
  let gabBounding = [
    getBoundingBox(-1400,-1800,1400,700)
  ]

  artists.gab = new Artist(
    [
      new Question("who are you", "assets/audio/Gab_Selfintro.m4a"),
      new Question(" Born and raised in the Bay Area, how New York shaped your creative process",
        "assets/audio/Gab_CommunityNYU.m4a"),
      new Question("When and how did you start tattoo?",
        "assets/audio/Gab_Tattoo.m4a"),
      new Question("What is the inspiration of this t-shirt design?",
        "assets/audio/Gab_Nvshu.m4a"),
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
  artists.gab.artList.push({
    img: loadImage("assets/art/tattoo2.jpeg"),
    x: -170,
    y: -1441,

    w: 360,
    h: 470
  })
  artists.gab.profileImage = loadImage('assets/art/gab.jpg') // image of the artist
}

function createKenshay() {
  let KenshayBounding = [
    getBoundingBox(38,-917,1200,820),
    getBoundingBox(-395, -773, 500, 600)
  ]
  artists.kenshay = new Artist([
    new Question('who are you', 'Who are you Kenshay.wav'),
    new Question('what is your background', 'What is your background.wav')
    new Question('how would you describe this art piece', 'Describe art piece #1.wav')
    new Question('how would you describe this art piece', 'Describe art piece #2.wav')
    new Question('what would you want people to know about this art piece', 'What does this art piece mean to you.wav')
    new Question('what does this art piece mean to you', 'assets/audio/tst_audio1.wav')
    new Question('what does this art piece mean to you', 'assets/audio/tst_audio1.wav')
    new Question('is there any inspiration for this piece', 'assets/audio/tst_audio1.wav')
    new Question('is there any inspiration for this piece', 'assets/audio/tst_audio1.wav')
  ], KenshayBounding)
  artists.kenshay.artList.push({
    img: loadImage("assets/art/capychilling.jpg"),
    x: 689,
    y: -657,
    w: 250,
    h: 250
  })
  artists.kenshay.artList.push({
    img: loadImage("assets/art/bacurau.jpeg"),
    x: 200,
    y: -500,
    w: 250,
    h: 250
  })
  artists.kenshay.profileImage = loadImage('assets/pug-dog-dancing.gif')
  }

  function getBoundingBox(x,y,width,height){ # move up if not moved already
  return {
    x:x,
    y:y,
    w:width,
    h:height
  }
}

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
<<<<<<< Updated upstream
    x: x,
    y: y,
    w: width,
    h: height,
  };
=======
    x:x,
    y:y,
    w:width,
    h:height
  }
>>>>>>> Stashed changes
}
