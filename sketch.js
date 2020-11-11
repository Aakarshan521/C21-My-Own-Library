var fixedRect, movingRect;
var rect1,rect2,rect3
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  rect1 = createSprite(200,200,30,80)
  rect1.shapeColor = "blue"
rect2 = createSprite(300,400,50,80)
rect2.shapeColor = "yellow"
rect3 = createSprite(600,200,80,50)
rect3.shapeColor = "purple"
rect3.velocityX = -3;
rect1.velocityX = 3;

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(rect1, movingRect)){
    movingRect.shapeColor = "red";
    rect1.shapeColor = "red";
  }
  else if(isTouching(fixedRect, movingRect)){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else if(isTouching(rect2,movingRect)){
movingRect.shapeColor = "red"
rect2.shapeColor = "red"
  }
 else if(isTouching(rect3,movingRect)){
movingRect.shapeColor = "red"
rect3.shapeColor = "red"


 }
  else{
    movingRect.shapeColor = "green";
    rect1.shapeColor = "blue";
    fixedRect.shapeColor = "green";
    rect2.shapeColor = "yellow"
    rect3.shapeColor = "purple"
  }
  bounceOff(rect1,rect3)
  drawSprites();
}

