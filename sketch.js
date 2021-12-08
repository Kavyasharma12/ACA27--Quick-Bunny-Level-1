let bunny;
let edges;
let carrot;
let brick1;
let brick2;
let brick3;
let brick4;
let brick5;
let brick6;
let brick7;
let brick8;
let brick9;
let brick10;
let brick11;
let brick12;

function preload() {
  //load game assets
 
}


function setup() {
  createCanvas(600,600);
  edges=createEdgeSprites();
  bunny=createSprite(40,540,17,17);
  carrot =createSprite(540,40,30,30);
  brick1 =createSprite(40,300,80,20);
  brick2 =createSprite(150,300,80,20);
  brick3 =createSprite(260,300,80,20);
  brick4 =createSprite(370,300,80,20);
  brick5 =createSprite(480,300,80,20);
  brick6 =createSprite(590,300,80,20);
  brick7 =createSprite(0,350,80,20);
  brick8 =createSprite(110,350,80,20);
  brick9 =createSprite(220,350,80,20);
  brick10 =createSprite(330,350,80,20);
  brick11 =createSprite(440,350,80,20);
  brick12 =createSprite(550,350,80,20);

}

function draw() {
  background("green"); 
  bunny.bounceOff(edges[0]);
  bunny.bounceOff(edges[1]);
  bunny.bounceOff(edges[2]);
  bunny.bounceOff(edges[3]);

  if(keyDown("up")){
    bunny.y=bunny.y-3;
  }
  if(keyDown("down")){
    bunny.y=bunny.y+3;
  }
  if(keyDown("left")){
    bunny.x=bunny.x-3;
  }
  if(keyDown("right")){
    bunny.x=bunny.x+3;
  }
  if(bunny.isTouching(carrot)){
    stroke("yellow")
    textSize(40);
    text("You Won!!",200,250);
  }
  if(bunny.isTouching(brick1)){
    bunny.x = 40;
    bunny.y = 540;
  }
  if(bunny.isTouching(brick2)){
    bunny.x = 40;
    bunny.y = 540;
  }
  if(bunny.isTouching(brick3)){
    bunny.x = 40;
    bunny.y = 540;
  }
  if(bunny.isTouching(brick4)){
    bunny.x = 40;
    bunny.y = 540;
  }
  if(bunny.isTouching(brick5)){
    bunny.x = 40;
    bunny.y = 540;
  }
  if(bunny.isTouching(brick6)){
    bunny.x = 40;
    bunny.y = 540;
  }
  if(bunny.isTouching(brick7)){
    bunny.x = 40;
    bunny.y = 540;
  }
  if(bunny.isTouching(brick8)){
    bunny.x = 40;
    bunny.y = 540;
  }
  if(bunny.isTouching(brick9)){
    bunny.x = 40;
    bunny.y = 540;
  }
  if(bunny.isTouching(brick10)){
    bunny.x = 40;
    bunny.y = 540;
  }
  if(bunny.isTouching(brick11)){
    bunny.x = 40;
    bunny.y = 540;
  }
  if(bunny.isTouching(brick12)){
    bunny.x = 40;
    bunny.y = 540;
  }

  bunny.shapeColor = "white"
  carrot.shapeColor = "orange"  
  brick1.shapeColor = "red"  
  brick2.shapeColor = "red"  
  brick3.shapeColor = "red"  
  brick4.shapeColor = "red"  
  brick5.shapeColor = "red"  
  brick6.shapeColor = "red"  
  brick7.shapeColor = "red"  
  brick8.shapeColor = "red"  
  brick9.shapeColor = "red"  
  brick10.shapeColor = "red"  
  brick11.shapeColor = "red"  
  brick12.shapeColor = "red"  
   
  drawSprites();
  
}
