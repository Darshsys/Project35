var dog,dogSprite,happyDogSprite,foodS,foodStock;
var database;

function preload(){
	dogSprite = loadImage("Dog.png");
  happyDogSprite = loadImage("happydog.png");
}

function setup(){
	createCanvas(500,500);
  //foodStock=database.ref('Food');
  //foodStock.on("value",readStock)
}

function draw(){  
  background(46,139,87);
  if (keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappy);
  }

  drawSprites();
  text("Food Remaning : 20",200,210);
  textSize(50);
  fill(255,255,255);
}