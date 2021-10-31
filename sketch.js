
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var backImg;
var playerImg;
var player;
var engineImg,batteryImg,oilImg,fuelImg,carImg,metalImg;
var engine,battery,oil,fuel,car,steeringWheel,speed;
var wheelImg,speedImg,ground;
var metal;
var metalGroup;
var heart1, heart2, heart3
var wall;
var sound,bgSound;
var bgsound2;
var image1,photo;
var gameState = "serve";
var parts = 6;
var life = 3;

function preload()
{
	backImg = loadImage("assets/1.jpg");
	playerImg = loadImage("assets/2.png");
  engineImg = loadImage("assets/5.png");
  batteryImg = loadImage("assets/7.png");
  oilImg = loadImage("assets/8.png");
  fuelImg = loadImage("assets/9.png");
  carImg = loadImage("assets/10.png");
  metalImg = loadImage("assets/3.png");
  wheelImg = loadImage("assets/4.png");
  speedImg = loadImage("assets/6.png");
  heart1Img = loadImage("assets/heart_1.png")
  heart2Img = loadImage("assets/heart_2.png")
  heart3Img = loadImage("assets/heart_3.png")
  sound = loadSound("assets/lose.mp3");
  image1 = loadImage("assets/game.png");
  bgSound = loadSound("assets/stay.mp3");
  bgsound2 = loadSound("assets/co.mp3");
}

function setup() {
	createCanvas(1200, 550);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
player = createSprite(100,200,50,50);
player.addImage(playerImg);
player.scale = 0.4
player.visible = true;
//player.debug = true
   player.setCollider("rectangle",20,0,180,456)
ground = new Ground(0, height - 2, width * 2, 1);
//
heart1 = createSprite(displayWidth-150,40,20,20)
heart1.visible = false
 heart1.addImage("heart1",heart1Img)
 heart1.scale = 0.4

 heart2 = createSprite(displayWidth-200,40,20,20)
 heart2.visible = false
 heart2.addImage("heart2",heart2Img)
 heart2.scale = 0.4

 heart3 = createSprite(displayWidth-200,40,20,20)
 heart3.addImage("heart3",heart3Img)
 heart3.scale = 0.4
 //
wall = createSprite(1,5,10,1080);
wall.visible = false;
//
engine = createSprite(1100,100,50,50);
engine.addImage(engineImg);
engine.scale = 0.3;
engine.velocityX = -2;
//engine.debug = true
engine.setCollider("rectangle",2,0,400,300)
//
battery = createSprite(1700,200,50,50);
battery.addImage(batteryImg);
battery.scale = 0.3;
battery.velocityX = -2;
//battery.debug = true;
battery.setCollider("rectangle",2,0,400,300)
//
fuel = createSprite(1170,300,50,50);
fuel.addImage(fuelImg);
fuel.scale = 0.3;
fuel.velocityX = -2;
//fuel.debug = true;
fuel.setCollider("rectangle",2,0,200,250)
//
oil = createSprite(1300,400,50,50);
oil.addImage(oilImg);
oil.scale = 0.3;
oil.velocityX = -2;
//oil.debug = true;
oil.setCollider("rectangle",2,0,300,300)
//
steeringWheel = createSprite(1000,450,50,50);
steeringWheel.addImage(wheelImg);
steeringWheel.scale = 0.2;
steeringWheel.velocityX = -2;
//steeringWheel.debug = true;
steeringWheel.setCollider("rectangle",2,0,400,400)
//
speed = createSprite(1150,500,50,50);
speed.addImage(speedImg);
speed.scale = 0.5;
speed.velocityX = -2;
//speed.debug = true;
speed.setCollider("rectangle",2,0,200,150)
//*//*//
photo = createSprite(550,300,50,50);
photo.addImage(image1);
photo.scale =1;
photo.visible= true

metalGroup= new Group();

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(backImg);
  if (gameState === "serve"){

    if(keyDown("SPACE")){
      gameState = "play"
      photo.visible = false;
      bgSound.play();
    }
      photo.display();

  }
  if(gameState === "play"){
  textSize(30);
fill("black");
text("parts to be Collected :"+parts,500,40);

//
  if(keyDown("UP_ARROW")||touches.length>0){
	player.y = player.y-30
  }
  if(keyDown("DOWN_ARROW")||touches.length>0){
   player.y = player.y+30
  }
//

if(metalGroup.isTouching(player)){
 
  sound.play();


for(var i=0;i<metalGroup.length;i++){     
     
 if(metalGroup[i].isTouching(player)){
      metalGroup[i].destroy()
     
     life=life-1
      } 

}
}
//
if(life===3){
  heart3.visible = true
  heart1.visible = false
  heart2.visible = false
  
}
if(life===2){
  heart2.visible = true
  heart1.visible = false
  heart3.visible = false
  
}
if(life===1){
  heart1.visible = true
  heart3.visible = false
  heart2.visible = false
  
}



if(metalGroup.isTouching(wall)){
  for(var i=0;i<metalGroup.length;i++){     
       
    if(metalGroup[i].isTouching(wall)){
         metalGroup[i].destroy()}}  
         
}
//
if(engine.isTouching(wall)){
  engine.x = random(900,1100);
  engine.y = random(100,500)

}
if(engine.isTouching(player)){
  engine.destroy();
  parts = parts -1;
  bgsound2.play();
  
}
//
if(battery.isTouching(wall)){
  battery.x = random(900,1100);
  battery.y = random(100,500)

}
if(battery.isTouching(player)){
  battery.destroy();
  parts = parts -1;
  bgsound2.play();
  
  
}
//
if(fuel.isTouching(wall)){
  fuel.x = random(900,1100);
  fuel.y = random(100,500)

}
if(fuel.isTouching(player)){
  fuel.destroy();
  parts = parts -1;
  bgsound2.play();
  
  
}
//
if(oil.isTouching(wall)){
  oil.x = random(900,1100);
  oil.y = random(100,500)

}
if(oil.isTouching(player)){
  oil.destroy();
  parts = parts -1;
  bgsound2.play();
  
  
}
//
if(steeringWheel.isTouching(wall)){
  steeringWheel.x = random(900,1100);
  steeringWheel.y = random(100,500)

}
if(steeringWheel.isTouching(player)){
  steeringWheel .destroy();
  parts = parts -1;
  bgsound2.play();
  
  
}
//
if(speed.isTouching(wall)){
  speed.x = random(900,1100);
  speed.y = random(100,500)

}
if(speed.isTouching(player)){
  speed.destroy();
  parts = parts -1;
  bgsound2.play();
  
  
}
//
ground.display();
  Metall();


  
  drawSprites(); }
  if (life===0){
    gameState = "lose"
  }
  if(parts===0){
    gameState = "win"
    console.log("lose")
  }
  //
  if(gameState== "lose"){
     end()
     bgSound.stop()
  }
  if(gameState == "win"){
    gameOver()
    bgSound.stop()
}
///
function Metall(){
  if(frameCount%40===0){

    //giving random x and y positions for zombie to appear
    metal = createSprite(random(550,1200),random(100,550),40,40)

    metal.addImage(metalImg)
    metal.scale = 0.3
    metal.velocityX = -4
    //metal.debug = true
   metal.setCollider("rectangle",0,0,300,300)
   
    metal.lifetime = 400
   metalGroup.add(metal)
  }

}

}
function gameOver() {
  swal(
    {
      title: `🎉You Won!!😀
      Car is Assembled`,
      text: "Thanks for playing!!",
      imageUrl:
        "https://i.giphy.com/media/jePjAdmCogqys/200w.webp",
      imageSize: "300x300",
      confirmButtonText: "Play Again"
      
    },
    function(isConfirm) {
      if (isConfirm) {
        
        location.reload();
        cursor: pointer;
      }
    }
  );
}
function end(){


  swal(
    {
      title:`😒You Lose😒`,
      text: "Thanks for playing!!",
      imageUrl:
        "https://i.giphy.com/media/eJ4j2VnYOZU8qJU3Py/giphy.webp",
      imageSize: "250x250",
      confirmButtonText: "Play Again"
      
    },
    function(isConfirm) {
      if (isConfirm) {
        
        location.reload();
        cursor: pointer;
      }
    }
  );

}


