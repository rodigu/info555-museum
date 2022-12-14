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
      new Question(" How New York shaped your creative process",
        "assets/audio/Gab_CommunityNYU.m4a"),
      new Question("When and how did you start tattoo?",
        "assets/audio/Gab_Tattoo.m4a"),
      new Question("What is the inspiration of this t-shirt design?",
        "assets/audio/Gab_Nvshu.m4a"),
    ],
    gabBounding
  );

  artists.gab.addArt({
    img: loadImage("assets/art/nvshu.jpeg"),
    x: -1100,
    y: -1441,
    w: 550,
    h: 400
  })

  artists.gab.addArt({
    img: loadImage("assets/art/tattoo.jpeg"),
    x: -600,
    y: -1441,
    w: 460,
    h: 630
  })
  artists.gab.addArt({
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
    getBoundingBox(-1111,540,1200,1200),
  ]
  artists.kenshay = new Artist([
    new Question('who are you', 'assets/audio/who_are_you_kenshay.m4a'),
    new Question('what is your background', 'assets/audio/background_Kenshay.m4a'),
    new Question('how would you describe art piece #1', 'assets/audio/describe_1_kenshay.m4a'),
    new Question('how would you describe art piece #2', 'assets/audio/describe_2_kenshay.m4a'),
    new Question('what should I know', 'assets/audio/Kenshay_people_should_know.m4a'),
    new Question('is there any inspiration for this piece', 'assets/audio/inspiration_kenshay.m4a')
  ], KenshayBounding)
  artists.kenshay.addArt({
    img: loadImage("assets/art/Kenshay_Art_1.jpg"),
    x: -714,
    y: 919,
    w: 555,
    h: 555
  })
  artists.kenshay.addArt({
    img: loadImage("assets/art/Kenshay_Art_2.jpg"),
    x: -707,
    y: 1547,
    w: 555,
    h: 555
  })
  artists.kenshay.profileImage = loadImage('assets/art/richmond.jpeg')
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
        "Why did you create the piece bacurau?",
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
  artists.carol.addArt({
    img: loadImage("assets/art/capychilling.jpg"),
    x: 679,
    y: -527,
    w: 540,
    h: 540,
  });
  artists.carol.addArt({
    img: loadImage("assets/art/bacurau.jpeg"),
    x: 100,
    y: -480,
    w: 540,
    h: 540,
  });
  artists.carol.profileImage = loadImage("assets/k_profile.jpeg");
}

function getBoundingBox(x, y, width, height) {
  return {
    x: x * zoomOutPct,
    y: y * zoomOutPct,
    w: width * zoomOutPct,
    h: height * zoomOutPct
  }
}
