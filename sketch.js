
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(700, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new Paper(100, 100);
	ground = new Ground(width/2, 450, width, 20);
	bottomEdge = new Box(600, 430, 100, 20);
	leftEdge = new Box(560, 400, 20, 80);
	rightEdge = new Box(640, 400, 20, 80);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  drawSprites();

  ball.display();
  ground.display();
  leftEdge.display();
  rightEdge.display();
  bottomEdge.display();
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body, ball.body.position,{x:137, y:-137});
	}
}



