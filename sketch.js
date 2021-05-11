
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperObject,ground,basket1,basket2,basket3

function preload()
{
	
}

function setup() {
	createCanvas(1200, 800);
 rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paperObject=new Paper(200,450,70)
ground = new Ground(width/2,670,width,20)
basket1= new Basket(700,650)

World.add(world,ground);





  Engine.run(engine)
Engine.update(engine)

}


function draw() {
  
  background("white");
  paperObject.display();
  ground.display();
  basket1.display();
 

 drawSprites();
 }
 function keyPressed() {  
if (keyCode === UP_ARROW) {
Matter.Body.applyForce(paperObject.body,paperObject.body.position,
  {x:650,y:-550}); 
 }
 }

