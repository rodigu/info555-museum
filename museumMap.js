function drawMap(){
  background("white");
  image(assetsList.museumMap, globalX, globalY, 3500, 5000);
}

function drawArt(){
  for (let artistName in artists){
    let artist = artists[artistName]
    artist.drawArt()
  }
}