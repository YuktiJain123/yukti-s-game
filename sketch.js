  var monkey,monkey2,monkey3,monkey4,monkey5,monkey6,monkey7,monkey8,monkey9,monkey10;

  var ground,groundImage;
  
  var bananaGroup,banana;
  var obstacleGroup,obstacle;
  
 var score;
 
 var survivalTime=0;
  
 

function preload() {
  groundImage = loadImage("jungle.jpg");
  monkey1 = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  bananaImage=loadImage ("banana.png");
  obstacleImage=loadImage("stone.png");
}
 
function setup() {
  createCanvas(400, 400);
  
  monkey =createSprite(50,180,20,50);
  monkey.addAnimation("running",monkey1 );
  monkey.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  
  bananaGroup = new Group();
  obstaclesGroup = new Group();
  
   score=0;
}

function draw() {
  background(220);
  fill("black");
  textSize("20");
  stroke("white");
  text("Score :+ score,500,50");
   score = score + Math.round(getFrameRate()/60);
  spawnbanana();
  spawnObstacles();
  
  if(keyDown("space")) {
    monkey.velocityY = -10;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(ground);
 
  
  drawSprites();
}

function spawnbanana()  {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(80,120));
    banana.addImage(bananaImage);
    banana.scale = 0.05;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
    //adjust the depth
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    //add each cloud to the group
    bananaGroup.add(banana);
  }
}
function spawnObstacles() {
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(600,165,10,40);
    obstacle.velocityX = -4;
    obstacle.scale=0.08;
    obstacle.addImage(obstacleImage);
   
//assign scale and lifetime to the obstacle           
    obstacle.scale = 0.5;
    obstacle.lifetime = 300;
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
  
}
}