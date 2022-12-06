function setupArtists(artists) {
  createCarol();
  createKenshay();
  createGabrielle();
}

function createGabrielle() {
  let gabBounding = [
    getBoundingBox(-1400,-1800,1400,900)
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
    getBoundingBox(-712,408,1200,1200),
    getBoundingBox(-735, 1800, 1000, 1000)
  ]
  artists.kenshay = new Artist([
    new Question('who are you', 'assets/audio/Who_are_you_K.wav'),
    new Question('what is your background', 'assets/audio/background_Kenshay.wav'),
    new Question('how would you describe art piece #1', 'assets/audio/describe_1_kenshay.wav'),
    new Question('how would you describe art piece #2', 'assets/audio/describe_2_kenshay.wav'),
    new Question('what would you want people to know about this art piece', 'assets/audio/people_to_know_Kenshay.wav'),
    new Question('is there any inspiration for this piece', 'assets/audio/Inspiration_Kenshay 1.wav')
  ], KenshayBounding)
  artists.kenshay.artList.push({
    img: loadImage("assets/art/Kenshay_Art_1.jpg"),
    x: -402,
    y: 871,
    w: 500,
    h: 555
  })
  artists.kenshay.artList.push({
    img: loadImage("assets/art/Kenshay_Art_2.jpg"),
    x: -1016,
    y: 1502,
    w: 500,
    h: 500
  })
  artists.kenshay.profileImage = loadImage('assets/art/richmond.jpeg')
  }

  function getBoundingBox(x,y,width,height){
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
    y: -607,
    w: 400,
    h: 400,
  });
  artists.carol.artList.push({
    img: loadImage("assets/art/bacurau.jpeg"),
    x: 200,
    y: -500,
    w: 400,
    h: 400,
  });
  artists.carol.profileImage = loadImage("assets/k_profile.jpeg");
}

function getBoundingBox(x, y, width, height) {
  return {
    x: x,
    y: y,
    w: width,
    h: height
  }
}
