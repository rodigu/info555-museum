function setupArtists(artists) {
  createCarol();
  createKenshay();
  createGabrielle();
}

function createGabrielle() {
  let gabBounding = [
    getBoundingBox(-1400 * zoomOutPct,-1800 * zoomOutPct,1400 * zoomOutPct,900 * zoomOutPct)
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

  artists.gab.artList.push({
    img: loadImage("assets/art/nvshu.jpeg"),
    x: -1100 * zoomOutPct,
    y: -1441 * zoomOutPct,
    w: 550 * zoomOutPct,
    h: 400 * zoomOutPct
  })

  artists.gab.artList.push({
    img: loadImage("assets/art/tattoo.jpeg"),
    x: -600 * zoomOutPct,
    y: -1441 * zoomOutPct,
    w: 460 * zoomOutPct,
    h: 630 * zoomOutPct
  })
  artists.gab.artList.push({
    img: loadImage("assets/art/tattoo2.jpeg"),
    x: -170 * zoomOutPct,
    y: -1441 * zoomOutPct,
    w: 360 * zoomOutPct,
    h: 470 * zoomOutPct
  })
  artists.gab.profileImage = loadImage('assets/art/gab.jpg') // image of the artist
}

function createKenshay() {
  let KenshayBounding = [
    getBoundingBox(-1111 * zoomOutPct,540 * zoomOutPct,1200 * zoomOutPct,1200 * zoomOutPct),
  ]
  artists.kenshay = new Artist([
    new Question('who are you', 'assets/audio/who_are_you_kenshay.m4a'),
    new Question('what is your background', 'assets/audio/background_Kenshay.m4a'),
    new Question('how would you describe art piece #1', 'assets/audio/describe_1_kenshay.m4a'),
    new Question('how would you describe art piece #2', 'assets/audio/describe_2_kenshay.m4a'),
    new Question('what should I know', 'assets/audio/Kenshay_people_should_know.m4a'),
    new Question('is there any inspiration for this piece', 'assets/audio/inspiration_kenshay.m4a')
  ], KenshayBounding)
  artists.kenshay.artList.push({
    img: loadImage("assets/art/Kenshay_Art_1.jpg"),
    x: -714 * zoomOutPct,
    y: 919 * zoomOutPct,
    w: 555 * zoomOutPct,
    h: 555 * zoomOutPct
  })
  artists.kenshay.artList.push({
    img: loadImage("assets/art/Kenshay_Art_2.jpg"),
    x: -707 * zoomOutPct,
    y: 1547 * zoomOutPct,
    w: 555 * zoomOutPct,
    h: 555 * zoomOutPct
  })
  artists.kenshay.profileImage = loadImage('assets/art/richmond.jpeg')
  }

function createCarol() {
  let carolBounding = [
    getBoundingBox(38 * zoomOutPct, -917 * zoomOutPct, 1200 * zoomOutPct, 820 * zoomOutPct),
    getBoundingBox(-395 * zoomOutPct, -773 * zoomOutPct, 500 * zoomOutPct, 600 * zoomOutPct),
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
  artists.carol.artList.push({
    img: loadImage("assets/art/capychilling.jpg"),
    x: 679 * zoomOutPct,
    y: -527 * zoomOutPct,
    w: 540 * zoomOutPct,
    h: 540 * zoomOutPct,
  });
  artists.carol.artList.push({
    img: loadImage("assets/art/bacurau.jpeg"),
    x: 100 * zoomOutPct,
    y: -480 * zoomOutPct,
    w: 540 * zoomOutPct,
    h: 540 * zoomOutPct,
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
