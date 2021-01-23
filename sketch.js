const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball1
function preload()
{
	
}

function setup() {
	createCanvas(1280, 580);

   
	engine = Engine.create();
  world = engine.world;
  
  ball1=new Ball (200,400,25,{isStatic:false})
  ground=new Ground(width/2,570,width,10)
  db1= new Dustbin(820,500,20,170)
  db2= new Dustbin(1090,500,20,170)
  db3= new Dustbin(955,570,289,20)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER)
  background(0);
  Engine.update(engine)
  ball1.display()
  db1.display()
  db2.display()
  db3.display()
  stroke("red")
  fill("White")
  textSize(45)
  text("We should always throw Garbage in Dustbin..",200,70)
  text("Show people by pressing 'Right Arrow' ",245,125)
  drawSprites();
 
}

function keyPressed(){
  if(keyCode === RIGHT_ARROW){
  Body.applyForce(ball1.body,ball1.body.position,{x:125,y:-125})
  }
}



