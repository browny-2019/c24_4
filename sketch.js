
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(800, 700);
	background(0,0,0);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here
	ground = new Ground(400,680,800,30);
	paperObject = new Ball(10,10,10,10,10);

	 box1Sprite = createSprite(width/1.42, 650,200,20); 
	 box1Sprite.shapeColor="white";
	 box2Sprite = createSprite(width/1.19,610,20,100);
	 box2Sprite.shapeColor="white";
	 box3Sprite = createSprite(width/1.7,610,20,100);
	 box3Sprite.shapeColor="white";
   

	Engine.run(engine);
  
}


function draw() {
 
  background(0);
  ground.display();
  paperObject.display();
  
  drawSprites();
 
}
//function keyPressed() {
//	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:85});





