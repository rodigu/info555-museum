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