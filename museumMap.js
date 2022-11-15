function drawMap(){
  background("white");
  image(assetsList.museumMap, globalX, globalY, 1000, 1000);
}

function drawArt(){
  for (let artistName in artists){
    let artist = artists[artistName]
    for (let art of artist.artList){
      image(art.img, globalX + art.x, globalY + art.y, 180, 120)
    }
  }
}