var orange = [],apple = [],mango = [],pineapple = [],melon = [],orangei,applei,mangoi,pineapplei,meloni;
var oranges,apples,mangoes,pineapples,melons;
var corange,capple,cpineapple,cmango,cmelon;
var edges;
var vx = 300;
var vy= 300;
var vi = 0;
var score = 0;
var state = 0;

function preload(){
  orangei = loadImage("assets/orange.png");
  applei = loadImage("assets/apple.png");
  mangoi = loadImage("assets/mago.png");
  meloni = loadImage("assets/melon.png");
  pineapplei = loadImage("assets/pineapple.png");
}

function setup() {
  createCanvas(600,600);
  oranges = new Group()
  apples = new Group()
  pineapples = new Group();
  melons = new Group();
  mangoes = new Group()
  spawnOrange()
  spawnApple();
  spawnPineapple()
  spawnMango();
  spawnMelon()
  edges = createEdgeSprites()
  //setInterval(spawnOrange(), 1000)
}


function draw() {
  background("BLACK");  
  if (state == 0){
    textSize(30)
    text("SPACE = mango" + '\n' + "UP = orange" + '\n' + "DOWN = apple" + '\n' + "LEFT = melon" + '\n' + "RIGHT = pineapple",20,300)
    text("Press ENTER to see more instructions",20,520)
    if(keyWentDown("enter")){
      state = 0.5;
    }
    
    
  } else if(state==1){
    play();
    if(score < 0){
      gameOver();
    }
  } else if (state === 0.5){
    textSize(20)
    text("if the orange or the melon hits the bottom edge" + '\n' + "you will loose 5 points" + '\n'
    + "if the mango hits the top edge you will loose 5 points" + '\n'
    + "if the apple hits the left edge you will loose 5 points" + '\n'
    + "if the pineapple hits the right edge you will loose 5 points" + '\n' + 
    "if you you get under 0 points you loose", 20,300)
    text("press ENTER to start the game",20,520)
    if(keyWentDown("enter")){
      state = 1;
    }
  }
  
}

function spawnOrange(){
  //console.log("orange" + vi)
  //for(var i = vi; i <= orange; i--){
  //console.log("hhi" + i)
  orange[0] = createSprite(vx,vy,20,20);
  orange[0].addImage(orangei)
  orange[0].scale = 0.12;
  orange[0].velocityX = vx
  orange[0].velocityY = vy;
  corange = orange[0];
  oranges.add(corange)
  //console.log("i"+i)
  vi = 0;
 // }


}

function spawnApple(){

  for(var i = 0; i <= 5; i++){
    if(i ==0){
    apple[i] = createSprite(vx,vy,20,20);
    apple[i].addImage(applei)
    apple[i].scale = 0.12;
    apple[i].velocityX = random(5,-5);
    apple[i].velocityY = random(5,-5);
    capple = apple[i];
    apples.add(capple)
    }
    }
}

function spawnMango(){
  for(var i = 0; i <= 5; i++){
    if(i==0){
    mango[i] = createSprite(vx,vy,20,20);
    mango[i].addImage(mangoi)
    mango[i].scale = 0.12;
    mango[i].velocityX = random(5,-5)
    mango[i].velocityY = random(5,-5);
    cmango = mango[i];
    mangoes.add(cmango)
    }
    }
}

function spawnPineapple(){
  for(var i = 0; i <= 5; i++){
    if(i==0){
    pineapple[i] = createSprite(vx,vy,20,20);
    pineapple[i].addImage(pineapplei)
    pineapple[i].scale = 0.23;
    pineapple[i].velocityX = random(5,-5)
    pineapple[i].velocityY = random(5,-5);
    cpineapple = pineapple[i];
    pineapples.add(cpineapple)
  }
    }
}

function spawnMelon(){
  for(var i = 0; i <= 5; i++){
    if(i==0){
    melon[i] = createSprite(vx,vy,20,20);
    melon[i].addImage(meloni)
    melon[i].scale = 0.12;
    melon[i].velocityX = random(5,-5)
    melon[i].velocityY = random(5,-5);
    cmelon = melon[i]
    melons.add(cmelon)
    }
  }
}



function play(){


  //spawnOrange();
  textSize(25)
  text("Score:" + score, 20,50)

 
  oranges.bounceOff(edges[0])
  oranges.bounceOff(edges[1])
  oranges.bounceOff(edges[2])
  if(oranges.bounceOff(edges[3])){
    score -= 5;
  }
  mangoes.bounceOff(edges[0])
  mangoes.bounceOff(edges[1])
  mangoes.bounceOff(edges[3])
  if(mangoes.bounceOff(edges[2])){
    score -=5;
  }
  apples.bounceOff(edges[1])
  apples.bounceOff(edges[2])
  apples.bounceOff(edges[3])
  if(apples.bounceOff(edges[0])){
    score -=5;
  }
  pineapples.bounceOff(edges[0])
  pineapples.bounceOff(edges[2])
  pineapples.bounceOff(edges[3])
  if(pineapples.bounceOff(edges[1])){
    score -= 5;
  }
  melons.bounceOff(edges[0]);
  melons.bounceOff(edges[1]);
  melons.bounceOff(edges[2]);
  if(melons.bounceOff(edges[3])){
    score -=5;
  }

  destroyFruits();
  //states();
  drawSprites();
  
}

function destroyFruits(){


  if(keyWentDown("up")){
    corange.destroy();
    score += 1;
  }
  if(keyWentUp("up")){
    spawnOrange()
  }


  if(keyWentDown("down")){
    capple.destroy();
    score += 1;
  }
  if(keyWentUp("down")){
    spawnApple()
  }

  if(keyWentDown("left")){
    cmelon.destroy();
    score += 1;
  }
  if(keyWentUp("left")){
    spawnMelon()
  }

 
  if(keyWentDown("right")){
    cpineapple.destroy();
    score += 1;
  }
  if(keyWentUp("right")){
    spawnPineapple()
  }
  if(keyWentDown("space")){
    cmango.destroy();
    score += 1;
  }
  if(keyWentUp("space")){
    spawnMango();
  }

  
}

function gameOver(){
  swal({
    title: `GAME OVER`,
    confirmButtonText: "PLAY AGAIN"
  },
  function(isConfirm){
    if(isConfirm){
      location.reload();
    }
  })
}

