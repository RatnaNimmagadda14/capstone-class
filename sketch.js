var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  ghost = createSprite(100,300)
  ghost.addImage(ghostImg)
  ghost.velocityY =1
  ghost.scale=0.3
  
}

function draw() {
  background(200);
  if(keyDown("space")){
    ghost.velocityY=-5
    
  }

  if(keyDown("left")){
    ghost.x-=5
  }
 if(keyDown("right")){
   ghost.x+=5
 }
  ghost.velocityY+=0.5
  if(tower.y > 400){
      tower.y = 300
    }
    drawSprites()
 spawnDoors()

}
function spawnDoors(){
  if(frameCount%200===0 )
  {
    var door=createSprite(200,-55)
    var railing=createSprite(200,10)
    door.x=Math.round(random (100,500))
    railing.x=door.x
    door.velocityY = 2
    railing.velocityY=2
    door.addImage(doorImg)
    railing.addImage(climberImg)
  }
}
