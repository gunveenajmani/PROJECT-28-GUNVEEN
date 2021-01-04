var ground;
var tree;
var boyImage;
var mango1, mango2, mango3;
var stone, rope;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
  boyImage= loadImage("boy.png");
  treeImage= loadImage("tree.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   ground = new Ground(400, 680, 800, 40);

   //tree = new Tree(600,400, 200,600);

   mango1 = new Mango(550, 350);
   mango2 = new Mango(600,300);

   stone= new Stone(50, 600, 25);

   rope= new Rope(stone.Body, {x:50, y:600});
   
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  ground.display();
 //tree.display();

imageMode(CENTER);
image(boyImage, 100,630,150,150);
image(treeImage,600,400,200,600)
mango1.display();
mango2.display();
stone.display();
detectCollision(stone, mango1);
detectCollision(stone, mango2);
  drawSprites();
 
}

function mouseDragged(){
  Matter.Body.setPosition(stone.Body, {x: mouseX , y: mouseY});
  
}


function mouseReleased(){
  rope.fly();
 
 /*
  if(bird.body.speed<1){
      bird.trajectory=[];
  }
  */
}

function keyPressed(){
  if(keyCode === 32){
      
      Matter.Body.setPosition(stone.Body, {x:200 , y:50 })
      rope.attach(stone.Body);
      
  }
}

function detectCollision(lstone,lmango){

  mangoBodyPosition=lmango.Body.position;
  stoneBodyPosition=lstone.Body.position;
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  
  	if(distance<=lmango.radius+lstone.radius)
    {
      
  	  Matter.Body.setStatic(lmango.Body,false);
    }

  }