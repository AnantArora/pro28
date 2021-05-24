var paper
var ground
var dustbin1
var dustbin2
var dustbin3

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
 	
}

function setup() {
	createCanvas(1200, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	
	
    paper= new Paper (200,270,20);
	dustbin1= new Dustbin(600,680,200,20);
	dustbin2=new Dustbin(510,615,20,150);
    dustbin3=new Dustbin(700,615,20,150);
	ground =new Ground(600,height,1200,20)
	Engine.run(engine);
  
}


function draw() 
{
  rectMode(CENTER);
  background("#00ffff");
  
  
  
  drawSprites();
  
 paper.display();
 
 ground.display();
 dustbin1.display();
 dustbin2.display();
 dustbin3.display();
    paper.debug=true
}

function keyPressed()
{

	if(keyCode === UP_ARROW) 
	{

   Matter.Body.applyForce(paper.body,paper.body.position,{x:3,y:-3});

	}



}