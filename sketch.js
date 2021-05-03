var backgroundFightImg;
var gameState = "choose";
var count = 0;
var player1;
var dAttack;
var player2;


function preload(){
  //background image
    backgroundFightImg = loadImage("game_background_1/game_background_1.png");
    //character icons
    d = loadImage("demon/Idle1.png")
    dr = loadImage("dragon/Idle1.png")
    j = loadImage("jinn_animation/Idle1.png")
    k = loadImage("Knight/knight.png")
    l = loadImage("lizard/Idle1.png")
    m = loadImage("Mage/mage.png")
    me = loadImage("medusa/Idle1.png")
    r = loadImage("Rogue/rogue.png")
    s = loadImage("small_dragon/Idle1.png")
    //fight music
    fightCount = loadSound("fight.mp3");
    battleMusic = loadSound("battle.mp3");

    dAttack = loadAnimation("demon/Attack1.png", "demon/Attack2.png", "demon/Attack3.png", "demon/Attack4.png")

}


function setup() {
  createCanvas(1365, 665);
  if(gameState === "choose"){
    background(backgroundFightImg);
  //row 1
  demon = createSprite(350, 200, 100, 100)
  demon.addImage(d)
  dragon = createSprite(475, 210, 100, 100)
  dragon.addImage(dr)
  jinn = createSprite(650, 200, 100, 100)
  jinn.scale = 1.4
  jinn.addImage(j)
  knight = createSprite(800, 200, 100, 100)
  knight.scale = 1.5
  knight.addImage(k)
  lizard = createSprite(950, 200, 100, 100)
  lizard.scale = 1.5
  lizard.addImage(l)

  //row2
  mage = createSprite(412, 350, 100, 100)
  mage.scale = 1.5;
  mage.addImage(m)
  medusa = createSprite(562, 375, 100, 100);
  medusa.scale = 1.5;
  medusa.addImage(me)
  rogue = createSprite(725, 350, 100, 100);
  rogue.scale = 1.5;
  rogue.addImage(r)
  smallDragon = createSprite(875, 375, 100, 100)
  smallDragon.scale = 1.5;
  smallDragon.addImage(s)
  fill("black");
  textSize(30);
  text("SELECT YOUR CHARACTER", 450, 500)
  }

  if(gameState === "play"){
    fightCount.play()
  }
}

function draw() {
  background(backgroundFightImg);
  if(mousePressedOver(demon)||mousePressedOver(dragon)||mousePressedOver(jinn)||mousePressedOver(knight)||mousePressedOver(lizard)||mousePressedOver(mage)||mousePressedOver(medusa)||mousePressedOver(rogue)||mousePressedOver(smallDragon)){
    gameState = "play"
  }

  if(gameState === "play" && mousePressedOver(demon)){
    player1 = createSprite(500, 300, 100, 100)
    player1.addImage(d)
    //count = 1;
  }

  else if(gameState === "play"&&mousePressedOver(dragon)){
    player2 = createSprite(500, 300, 100, 100);
    player2.addImage(dr);
    count = 2;
  }

  else if(gameState === "play"&&mousePressedOver(jinn)){
    player3 = createSprite(500, 300, 100, 100);
    player3.scale = 1.4;
    player3.addImage(j);
    count = 3;
  }

  else if(gameState === "play"&&mousePressedOver(knight)){
    player4 = createSprite(500, 300, 100, 100);
    player4.scale = 1.5;
    player4.addImage(k)
    count = 4;
  }

  else if(gameState === "play"&&mousePressedOver(mage)){
    player5 = createSprite(500, 300, 100, 100);
    player5.scale = 1.5;
    player5.addImage(m)
    count = 5;
  }

  else if(gameState === "play"&&mousePressedOver(medusa)){
    player6 = createSprite(500, 300, 100, 100)
    player6.scale = 1.5;
    player6.addImage(me)
    count = 6;
  }

  else if(gameState === "play"&&mousePressedOver(rogue)){
    player7 = createSprite(500, 300, 100, 100);
    player7.scale = 1.5;
    player7.addImage(r)
    count = 7;
  }

  else if(gameState === "play"&&mousePressedOver(smallDragon)){
    player8 = createSprite(500, 300, 100, 100);
    player8.scale = 1.5;
    player8.addImage(s)
    count = 8;
  }

  if(gameState === "play"){
    //making all characters false and changing x to make them out of mouse reach
    demon.visible = false;
    dragon.visible = false;
    jinn.visible = false;
    knight.visible = false;
    lizard.visible = false;
    mage.visible = false
    medusa.visible = false;
    rogue.visible = false;
    smallDragon.visible = false;

    demon.y = -200;
    dragon.y = -200;
    jinn.y = -200;
    knight.y = -200;
    lizard.y = -200;
    mage.y = -200;
    medusa.y = -200;
    rogue.y = -200;
    smallDragon.y = -200;
  }

  //space = jump
  //right barrow left = move
  //left mouse click = attack

  //if(gameState === "play" && keyDown("space")){
    //player1.y =  player1.y-4;
  //}
 // else{
 // player1.y= 300 
  //}

  if(keyDown(RIGHT_ARROW)&&gameState === "play"){
    player1.x+=4
    player2.x+=4;
  }

  if(keyDown(LEFT_ARROW)&&gameState === "play"){
    player1.x-=4;
    player2.x-=4;
  }

  if(keyDown("a")&&gameState === "play"){
    player1.addImage(dr)
  }


  drawSprites();
}