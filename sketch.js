var boy1Img, boy1;
var boy2Img, boy2;
var background1, background1Img;
var background2, background2Img;
var spaceship1, spaceship1Img;
var spaceship2, spaceship2Img;
var spaceship3, spaceship3Img;
var bullet,bulletImg
function preload() {
boy1Img = loadImage("images/boy1.png");
boy2Img = loadImage("images/boy2.png");
background1Img = loadImage("images/space1.jpg");
background2Img = loadImage("images/background2.png");
bulletImg = loadImage("images/bullet.png")
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  background1 = createSprite(windowWidth-290, windowHeight-300);
  background1.addImage(background1Img);
  background1.scale = 1.25;
  background1.velocityX = -6;
  boy1 = createSprite(300, 300, 30, 40);
  boy1.addImage("shooting",boy1Img);
}

function draw() {
  background(0,0,0);  
 // console.log(background1.x);
 if(background1.x < 0) {
  background1.x = width;
  }
if(keyDown("LEFT_ARROW")) {
  boy1.changeImage("firing",boy2Img)
}
  drawSprites();
}
function mousePressed() {
  var bullet = createSprite(width/2, height/2,random(50, 100), random(50, 100));
  //bullet.addImage("fire", bulletImg)

  bullet.shapeColor = color(255)
  bullet.velocity.y = random(3);
  bullet.velocity.x = random(-3, 3);
  bullet.position.x = mouseX;
  bullet.position.y = mouseY;
  bullet.friction = 0.995;
//  bullet.life = 120;
}