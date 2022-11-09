function drawMap(){
  background("white");
  image(assetsList.museumMap, globalX, globalY, 1000, 1000);
  image(showing.img, globalX + showing.x, globalY + showing.y)
}