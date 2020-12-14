var fixedrect,movingrect;
var object1,object2;

function setup() {
  createCanvas(1200,800);
  fixedrect=createSprite(200, 200, 50, 80);
  fixedrect.shapeColor="green";
  movingrect=createSprite(400,200,80,30);
  movingrect.shapeColor="green";
  object1=createSprite(100,100,50,50);
  object1.shapeColor="green";
  object2=createSprite(200,100,50,50);
  object2.shapeColor="green";
  movingrect.debug=true;
  fixedrect.velocityY=+5;
  movingrect.velocityX=-5;
}

function draw() {
  background(0,0,0); 
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;
  
console.log(movingrect.x-fixedrect.x);

if(isTouching(movingrect,object1)){
  object1.shapeColor="blue";
  movingrect.shapeColor="blue";
}
else{
  object1.shapeColor="green";
    movingrect.shapeColor="green";
}
bounceOff(movingrect,fixedrect);

 drawSprites();
}






