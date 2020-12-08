
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin,dustbinimage

function preload()
{
	dustbinimage = loadImage ("dustbin.png") 
}

function setup() {
	createCanvas(1500, 700);
	groundSprite=createSprite(width/2, height-50, width,10);

	dustbin = createSprite(1100,530,20,20);
	dustbin.scale = 0.7;
	dustbin.addImage(dustbinimage)

	engine = Engine.create();
	world = engine.world;

	var ground_options ={
        isStatic: true
	}
	

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 var paperObject_options ={
		restitution: 1.0
	}

	
paperObject = new Paper(200,100,30, paperObject_options);
World.add(world,paperObject);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(300);
  paperObject.display();
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:44,y:-53});
	}
}

