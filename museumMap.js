function drawMap(){
  image(assetsList.museumMap, globalX, globalY, mapW, mapH);
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
  let minimapWidth = (mapW / 70) * (midW / 50)
  let minimapHeight = (mapH / 70) * (midW / 50)
  image(assetsList.museumMap, 0, 0, minimapWidth, minimapHeight)
  
  let xRef = map(globalX - midW, mapW / 2, -mapW / 2, 0, minimapWidth)
  let yRef = map(globalY - midH, mapH / 2, -mapH / 2, 0, minimapHeight)
  fill(200, 0, 0)
  circle(xRef, yRef, 5)
  pop()
}