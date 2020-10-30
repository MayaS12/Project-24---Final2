const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var dustbin1, dustbin2, dustbin3, dustbin4;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper();
	dustbin1 = new Dustbin(600,650,200,20);
	dustbin2 = new Dustbin(500,580,20,150);
	dustbin3 = new Dustbin(700,580,20,150);
	dustbin4 = new DustbinImg(600,520,270,270);
	ground = new Ground();

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  
  paper.display();
dustbin1.display();
dustbin2.display();
dustbin3.display();
ground.display();
dustbin4.display();

  drawSprites();
}

function keyPressed(){
	if (keyCode === UP_ARROW){

		Matter.Body.applyForce(paper.body, paper.body.position, {x: 36, y: -37})

	}
}