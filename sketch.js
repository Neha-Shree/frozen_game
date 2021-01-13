
var start,start_img;
var end,end_img;
var restart,restart_img;
var olaf1 , olaf1_img;
var background1 , background_img;
var olaf2 , olaf2_img;
var invisibleground;
var fire , fire_img;
var star1 , star1_img , star2 , star2_img , star3 , star3_img , star4 , star4_img , star5 , star5_img ; 
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var score = 0;

function preload(){
  
  background_img = loadImage("backgrd.jpg");
  olaf1_img = loadImage("olafwalk.png");
  olaf2_img = loadImage("olafend.png");
  fire_img = loadImage("fire.png");
  star1_img = loadImage("blue_star.png");
  star2_img = loadImage("gold_star.png");
  star3_img = loadImage("green_star.png");
  star4_img = loadImage("greenishblue_star.png");
  star5_img = loadImage("red_star.png");
  restart_img = loadImage("reset.jfif");
  
}

function setup(){
  
  createCanvas(700,600);
  background1 = createSprite(50,70,10,10);
  background1.addImage("background",background_img);
  background1.velocityX = -4;
  background1.scale = 3.4;

  olaf1 = createSprite(50,450,10,10);
  olaf1.addImage("olaf1",olaf1_img);
  olaf1.scale = 0.2;

  olaf2 = createSprite(350,300,50,50);
  olaf2.addImage("olaf2",olaf2_img);
  olaf2.scale = 1.4;
  olaf2.visible = false ;

  invisibleground = createSprite(350,542,800,50);
  invisibleground.visible = false;
  
  fireGroup = new Group;
  star1group = new Group;
  star2group = new Group;
  star3group = new Group;
  star4group = new Group;
  star5group = new Group;

 restart = createSprite(350,500,20,20);
 restart.addImage("restart",restart_img);
 restart.visible = false ;
 score = 0;
  
}

function draw(){

  background(0);

 if(gameState === PLAY)
 {


    if(background1.x < 50){
      background1.x = 700;
    }
  
    if(invisibleground.x > 500){
      invisibleground.x = 350;
    }
  
    if(keyDown("space")){
      olaf1.velocityY = -10;
   }
  
    if( olaf1.y < 250){
      olaf1.velocityY = 5;
    }

    olaf1.velocityY = olaf1.velocityY +0.6;

    olaf1.collide(invisibleground);

    if(olaf1.isTouching(star1group)){
      star1group.destroyEach();
      score = score + 5;
     }

     if(olaf1.isTouching(star2group))
    {
      star2group.destroyEach();
      score = score + 5;
    }
    if(olaf1.isTouching(star3group))
    {
      star3group.destroyEach();
      score = score + 5;
    }
    if(olaf1.isTouching(star4group))
    {
      star4group.destroyEach();
      score = score + 5;
    }
    if(olaf1.isTouching(star5group))
    {
      star5group.destroyEach();
      score = score + 5;
        } 
    
if(olaf1.isTouching(fireGroup)){
 
 gameState=END;
   
}
 }
 else if (gameState===END){

olaf1.visible = false ;
olaf2.visible = true ;
background1.velocityX = 0;
restart.visible = true ;  
fireGroup.setLifetimeEach(0);
star1group.setLifetimeEach(0); 
 star2group.setLifetimeEach(0) ;
 star3group.setLifetimeEach(0) ;
 star4group.setLifetimeEach(0) ;
 star5group.setLifetimeEach(0) ;
 }
 if(mousePressedOver(restart) && restart.visible===true){
  olaf1.visible = true ;
   background1.velocityX = -4;
   gameState=PLAY;
   score = 0;
   restart.visible=false;
  olaf2.visible = false ;
  
}
 
   spawnFire();
   spawnStar();
  



drawSprites();

fill("black");
textSize(30);
text("your score:"+score,300,30);
}
function reset(){
}

function spawnStar (){

  star1 = createSprite(600,0,1,1);
  star2 = createSprite(600,0,1,1);
  star3 = createSprite(600,0,1,1);
  star4 = createSprite(600,0,1,1);
  star5 = createSprite(600,0,1,1);

  star1.scale = 0.2;
  star2.scale = 0.2;
  star3.scale = 0.2;
  star4.scale = 0.2;
  star5.scale = 0.2;
 
  star1.velocityX = -6;
  star2.velocityX = -6;
  star3.velocityX = -6;
  star4.velocityX = -6;
  star5.velocityX = -6;

  if (frameCount % 150 === 0)
  {
  var rand = Math.round(random(1,5));
  switch(rand) {
    case 1: star1.addImage("star1",star1_img);
    star1group.add(star1);
            break;
    case 2: star2.addImage("star2",star2_img);
    star2group.add(star2);
            break;
    case 3: star3.addImage("star3",star3_img);
    star3group.add(star3);
            break;
    case 4: star4.addImage("star4",star4_img);
    star4group.add(star4);
            break;
    case 5: star5.addImage("star5",star5_img);
    star5group.add(star5);
            break;
    default: break;
  }

  star1.y = Math.round(random(250,500));
  star2.y = Math.round(random(250,500));
  star3.y = Math.round(random(250,500));
  star4.y = Math.round(random(250,500));
  star5.y = Math.round(random(250,500));

}

  star1.lifetime = 650 ;
  star2.lifetime = 650 ;
  star3.lifetime = 650 ;
  star4.lifetime = 650 ;
  star5.lifetime = 650 ;

}

function spawnFire(){
  
  fire = createSprite(800,470,1,1);
  fire.velocityX = -6;
  fire.scale = 0.1; 

  

if(frameCount % 150 === 0){
  fire.addImage("fire",fire_img);
  fireGroup.add(fire);
}

}
