//constants
	const Engine = Matter.Engine;
	const World = Matter.World;
	const Bodies = Matter.Bodies;
	const Body = Matter.Body;

//variables for bodies
	var paper, dustbin1, dustbin2, dustbin3, ground;

function preload() {

	
}

function setup() {
	//creating canvas
		createCanvas(800, 700);

	//creating engine and world which is different from matter.js engine and world
		engine = Engine.create();
		world = engine.world;

	//Creating the Bodies Here
		paper= new Paper(150,680,20);
		dustbin1= new Dustbin(600,635,10,80);
		dustbin2= new Dustbin(660,680,120,10);
		dustbin3= new Dustbin(720,635,10,80);
		ground= new Ground(0,700,1600,20);

	Engine.run(engine);
  
}


function draw() {
  	background("black");
  
	//displaying bodies  
		paper.display();
		dustbin1.display();
		dustbin2.display();
		dustbin3.display();
		ground.display();

	//drawing sprites
  		drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:65,y:-50});
	}
}


