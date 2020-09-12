var PLAY= 1;
var END = 0;
var gameState = PLAY;
var ground, invisibleGround;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup;
var ground;
var score

function preload(){
 
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup() {
createCanvas(400,400)
  
monkey= createSprite(50,340,20,20)
monkey.addAnimation("running",monkey_running) 
monkey.scale=0.1
  
 //banana= createSprite(50,100,10,10)
 //banana.addImage(bananaImage) 
 //banana.scale=0.1;
  
ground= createSprite(50,375,400,10) 
ground.x= ground.width/2;  

invisibleGround = createSprite(50,100,10,10)
 invisibleGround.visible=false; 
  
  score= 0;
  
  obstacleGroup= new Group();
  FoodGroup= new Group();
  
}


function draw() {
background("white")

  
 if(gameState === PLAY){ 
    if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
      
    }
monkey.velocityY = monkey.velocityY + 0.8 
  
  spawnobstacle();
  spawnfood();
   
   
   if(obstacleGroup.isTouching(monkey)){
    //monkey.velocityY=-12  
      gameState = END;
      }
      }
 else if (gameState=== END){
        ground.velocityX= 0;  
        monkey.velocityY= 0;
   
   obstacleGroup.setLifetimeEach(-1);
   FoodGroup.setLifetimEach(-1);
   
   obstacleGroup.setVelocityEach(0);
   FoodGroup.setvelocityEach(0)          
          }
monkey.collide(ground);
  drawSprites();
}
function spawnobstacle(){
if(frameCount %100 === 0){
var obstacle= createSprite(400,340,10,40)
obstacle.addImage(obstacleImage)
obstacle.velocityX=-6
  obstacle.scale=0.2;
  obstacle.Lifetime=100;
  //obstacle=Math.round(random(1,4))
   }
}

function spawnfood(){
if(frameCount %60 === 0){
var Food= createSprite(400,165,10,40)
Food.addImage(bananaImage)
Food.velocityX=-6
Food.scale=0.1;
Food.Lifetime=100;
//Food=Math.round(random(1,3))
   }
}

