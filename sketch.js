
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, paper, dustbinobj;

function setup() {
	createCanvas(1535, 700);

	


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width/2, 690, width, 20);
	paper = new Paper(200, 300, 40);
	dustbinobj = new dustbin(1200, 659);








	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  
  ground.display();
  paper.display();
  dustbinobj.display();

  
  drawSprites();
 
}

function keyPressed(){

	if (keyCode === UP_ARROW ) {
	  Matter.Body.applyForce(paper.body, paper.body.position, {
		x: 18,
		y: -20
	  });
	}
  }

