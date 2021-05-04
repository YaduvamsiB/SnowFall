const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var boy1, boy2, boy3;
var engine, world;

var maxDrops = 50;
var snow = [];

function preload() {
  bg = loadImage("snow1.jpg");
  Ss = loadSound("SnowSound.mp3");

  boyImage1 = loadImage("boy1.png");
  boyImage2 = loadImage("boy2.png");
  boyImage3 = loadImage("boy3.png");
}

function setup() {
  createCanvas(800, 600);
  engine = Engine.create();
  world = engine.world;

  boy1 = createSprite(200, 350, 20, 20);
  boy1.addImage(boyImage1);
  boy1.scale = 0.25;

  boy2 = createSprite(400, 450, 20, 20);
  boy2.addImage(boyImage2);
  boy2.scale = 0.37;

  boy3 = createSprite(80, 470, 20, 20);
  boy3.addImage(boyImage3);
  boy3.scale = 0.6;

  ground = createSprite(85, 560, 70, 5);
  ground.visible = false;

  if (frameCount % 100 === 0) {
    for (var i = 0; i < maxDrops; i++) {
      snow.push(new Snow(random(0, 800), random(-10, 100)));
    }
  }

  Ss.setVolume(0.05);
  Ss.loop();
}

function draw() {
  Engine.update(engine);
  background(bg);

  for (var i = 0; i < maxDrops; i++) {
    snow[i].display();
    snow[i].update();
  }

  boy3.collide(ground);

  boy3.velocityY = boy3.velocityY + 1;

  if (keyDown("space") && boy3.y >= 450) {
    boy3.velocityY = -12;
  }

  if (keyDown("RIGHT_ARROW")) {
    boy2.position.x = boy2.position.x + 8;
  }

  if (keyDown("LEFT_ARROW")) {
    boy2.position.x = 400;
  }

  drawSprites();
}
