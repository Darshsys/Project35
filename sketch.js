var dog,dogSprite,happyDogSprite,foodS,foodStock;
var database;

function preload(){
	dogSprite = loadImage("Dog.png");
  happyDogSprite = loadImage("happydog.png");
}

function setup(){
	createCanvas(500,500);
  database=firebase.database();
  foodStock=database.ref('Food');
  foodStock.on("value",readStock)

  dog=createSprite(250,300,150,150);
  dog.addImage(dogSprite);
  dog.scale=0.15;
  //happydog=createSprite(250,300,150,150);

}

function draw(){  
  background(46,139,87);
  if (keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDogSprite);
  }

  //readStock();
  //writeStock();

  drawSprites();
  textSize(20);
  fill(255,255,255);
  text("Food Remaning : "+foodS,170,210);
}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }

  database.ref('/').update({
    Food:x
  })
}