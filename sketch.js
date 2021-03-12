var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,world;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(700, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	//groundSprite=createSprite(width/2, height-35, width,10);
	//groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	downRect=new Box(330,600,200,20);
	leftRect=new Box(230,560,20,100);
	rightRect=new Box(430,560,20,100);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);  
  Engine.update(engine);
 
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

	downRect.display();
	leftRect.display();
	rightRect.display();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Matter.Body.setStatic(packageBody,false);
  }
  if(keyCode===LEFT_ARROW)
  {
	  helicopterSprite.x=helicopterSprite.x-5;
	  packageSprite.x=helicopterSprite.x;
  }
  if(keyCode===RIGHT_ARROW)
  {
	  helicopterSprite.x=helicopterSprite.x+5;
	  packageSprite.x=helicopterSprite.x;
  }
}



