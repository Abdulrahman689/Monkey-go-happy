var backImage,backgr;
var player, player_running;
var ground,ground_img;
var FoodGroup, playerGroup;
var score=0;

var END =0;
var PLAY =1;
var gameState = PLAY;

var bImg;
function preload(){
  backImage=loadImage("jungle.jpg");
  player_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
bImg = loadImage("banana.png");
}

function setup() {
  createCanvas(800,400);
  
  backgr=createSprite(0,0,800,400);
  backgr.addImage(backImage);
  backgr.scale=1.5;
  backgr.x=backgr.width/2;
  backgr.velocityX=-4;
  
  player = createSprite(100,340,20,50);
  player.addAnimation("Running",player_running);
  player.scale = 0.1;
  
  ground = createSprite(400,350,800,10);
  ground.x=ground.width/2;
  ground.visible=false;
  
  FoodGroup= new Group();
playerGroup = new Group();
}

function draw() { 
  background(0);
console.log(score);
  if(gameState===PLAY){
  
  if(backgr.x<100){
    backgr.x=backgr.width/2;
  }
    if(keyDown("space") ) {
      player.velocityY = -12;
    }
    if(FoodGroup.isTouching(player)){
score = score+1
FoodGroup.destroyEach();
    }
    player.velocityY = player.velocityY + 0.8;
  
    player.collide(ground);

    spawnFood();
  }
  text("SCORE: "+score,300,220)
  drawSprites();
}
function spawnFood(){
if(frameCount%45===0){
  var bananna = createSprite(600,250,40,10);
  bananna.y=random(120,200);
  bananna.addImage(bImg);
  bananna.scale=0.05;
  bananna.velocityX=-5;
  bananna.lifetime=300;
  player.depth = player.depth+1;
  FoodGroup.add(bananna)
  
}
}
