const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var dustbin;
var dustbin2;
var dustbin3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paper = new Paper(100,300,10);
	var ground=createSprite(400,380,800,10);
	
	dustbin = new Dustbin(700,300,20,20);

	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  paper.display();
  dustin.display();



  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === DOWN_ARROW){
	Matter.Body.applyForce(paper.body,paper.body.position,{
	x: 12,
	y: -13,
	});
}
}





