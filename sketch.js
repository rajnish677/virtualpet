//Create variables here
var dog,happyDog,database,foodS,foodStock;
function preload()
{
	//load images here
  //dog = loadImage("Dog.png")
  //happyDog = loadImage("happydog.png")
}

function setup() {
	createCanvas(500, 500);
  dog= createSprite(250,250,20,20)
database = firebase.database();
}


function draw() {  

  drawSprites();
  //add styles here
  background(46,139,87)

}



