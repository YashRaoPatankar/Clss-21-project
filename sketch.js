var canvas;
var music;
var sf1,sf2,sf3,sf4;
var box;
var blo1,blo2,blo3;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces

    sf1 = createSprite(70,570,200,20);
    sf1.shapeColor = color("blue");
    sf2 = createSprite(290,570,200,20);
    sf2.shapeColor = color("black");
    sf3 = createSprite(520,570,200,20);
    sf3.shapeColor = color("yellow");
    sf4 = createSprite(740,570,200,20);
    sf4.shapeColor = color("green");
    box = createSprite(465,300,35,35)
    box.shapeColor = color("white");
    blo1 = createSprite(800,600,6,1200);
    blo1.shapeColor = "pink";
    blo2 = createSprite(400,0,1600,6);
    blo2.shapeColor = "pink";
    blo3 = createSprite(0,300,6,1200);
    blo3.shapeColor = "pink";

    //create box sprite and give velocity

    box.velocityX = 2.5;
    box.velocityY = 4;


}

function draw() {
    background("pink");

    box.bounceOff(blo3);
    box.bounceOff(blo2);
    box.bounceOff(blo1);
    
  //add condition to check if box touching surface and make it box
if (isTouching(box,sf1)){

    box.shapeColor = "blue"
    music.stop();
    box.velocityY = 0;
    box.velocityX = 0;
}
if (isTouching(box,sf3) && box.bounceOff(sf3)){

    box.shapeColor = "yellow";
    music.play();
    
}

if (isTouching(box,sf2)  && box.bounceOff(sf2)){

box.shapeColor = "black";
}

if (isTouching(box,sf4)  && box.bounceOff(sf4)){

box.shapeColor = "green";

}

drawSprites();

}
