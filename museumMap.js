function drawMap(){
  background("white");
  image(assetsList.museumMap, globalX, globalY, 3500 * zoomOutPct, 5000 * zoomOutPct);
}

function drawArt(){
  for (let artistName in artists){
    let artist = artists[artistName]
    artist.drawArt()
  }
}


function museumMinimap() {
  push()
  imageMode(CORNERS)
  let minimapWidth = 35 * midW / 80
  let minimapHeight = 50 * midW / 80
  image(assetsList.museumMap, 0, 0, minimapWidth, minimapHeight)
  let xRef = - globalX * (minimapWidth / (3500 * zoomOutPct)) + 50
  let yRef = - globalY * (minimapHeight / (5000 * zoomOutPct)) + 77
  fill(200, 0, 0)
  circle(xRef, yRef, 5)
  pop()
}