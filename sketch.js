var bg,bgImg;
var player,playerImg
var zombie,zombieImg;
var bullets,bulletsImg;



function preload(){
    bgImg=loadImage("./assets/bg.jpeg");
    playerImg=loadImage("./assets/shooter_2.png");
    zombieImg=loadImage("./assets/zombie.png");

}

function setup() {
    createCanvas(windowWidth,windowHeight);
    

    bg=createSprite(displayWidth/2-70,displayHeight/2-40,20,20);
    bg.addImage(bgImg);
    bg.scale=1.1;

    player=createSprite(displayWidth-1250,displayHeight-300,50,50);
    player.addImage(playerImg);
    player.scale=0.3;





}

function draw() {
    background(0);

    if(keyDown("UP_ARROW") || touches.length>0){
        player.y=player.y-30;
    }
    
    if(keyDown("DOWN_ARROW") || touches.length>0){
        player.y=player.y+30;
    }

    zombiee();
    
    drawSprites();
  
}

function zombiee(){

    if(frameCount%50===0){
        var x=Math.round(random(500,1100));
        var y=Math.round(random(100,500));
        zombie=createSprite(x,y,50,50);
        zombie.addImage(zombieImg);
        zombie.scale=0.15;
        zombie.velocityX=-3;

    }

}
