//Declaring variables globally
var fixedRect, movingRect;
var box, book, eraser, phone;
function setup() {
  //creating canvas
  createCanvas(1200,800);
  
  //fixed Rectangle
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  
  //Moving Rectangle
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

 box = createSprite(25, 100, 200, 200);
 box.shapeColor = ("red");

 book = createSprite(250, 300, 50, 150);
 book.shapeColor ="orange";
 
 eraser = createSprite(400, 600, 100, 50);
 eraser.shapeColor =" blue";

 phone = createSprite(1000, 800, 50, 100);
 phone.shapeColor ="pink";
 
}

function draw() {
  //Creating Background
  background(0,0,0); 

  // moving rectangles by the mouse 
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

if(isTouching(movingRect, box)){
movingRect.shapeColor="purple";
box.shapeColor="purple";
}
else{
movingRect.shapeColor="green";
box.shapeColor="red";
}
  

//creating Sprites
  drawSprites();
}

function isTouching(object1,object2){

  if (object1.x-object2.x<object2.width/2+object1.width/2
    && object2.x-object1.x<object2.width/2+object1.width/2
    && object1.y-object2.y<object2.height/2+object1.height/2
    && object2.y-object1.y<object2.height/2+object1.height/2){

    return true;
  }
  else{
    return false;

}

}