function drawMap(){
  background("white");
  image(assetsList.museumMap, globalX, globalY, 1000, 1000);
}

function drawArt(){
  for (let artistName in artists){
    let artist = artists[artistName]
    artist.drawArt()
  }
}