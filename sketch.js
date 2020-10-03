var movingRect, fixedRect;


function setup() {
  createCanvas(1200,800);
 movingRect= createSprite(400, 200, 80, 30);
 movingRect.shapeColor = "red";
 movingRect.debug = true;
 fixedRect = createSprite(600, 400, 50, 80);
 fixedRect.shapeColor = "red";
 fixedRect.debug = true;
}

function draw() {
  background(0);
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY; 
  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 && fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2 && 
    movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2 && fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2 ){
movingRect.shapeColor= "green";
fixedRect.shapeColor = "green";
    
  } 
  else{
    movingRect.shapeColor = "red";
    fixedRect.shapeColor="red";
  }


  drawSprites();
}