function setupArtists(artists){
  let boundingTest = getBoundingBox(-450,-440,250,520)
  artists.testArtist = new Artist(['who are you', 'how old are you'], boundingTest)
  artists.testArtist.artList.push({
    img:loadImage("assets/job_and_his_daughters.jpg"),
    x: -320,
    y: -100,
  })
}

function getBoundingBox(x,y,width,height){
  return {
    x:x,
    y:y,
    w:width,
    h:height
  }
}