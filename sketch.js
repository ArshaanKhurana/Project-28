
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1150,100,30);
	mango3=new mango(1150,150,30);
	mango4=new mango(1100,150,30);
	mango5=new mango(1000,100,30);
	mango6=new mango(1000,150,30);

	stoneObj=new stone(140,400,30)

     launcherObject=new launcher(stoneObj.body,{x:240,y:420})


	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  stoneObj.display();
  launcherObject.display();

  detectCollision(stoneObj,mango1);
  detectCollision(stoneObj,mango2);
  detectCollision(stoneObj,mango3);
  detectCollision(stoneObj,mango4);
  detectCollision(stoneObj,mango5);
  detectCollision(stoneObj,mango6);



  groundObject.display();
}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stoneObj.body, {x:140, y:400})
		launcherObject.attach(stoneObj.body);
	}
}

function mouseDragged(){
	Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
   launcherObject.fly()
}

function detectCollision(Lstone,Lmango){
  var mangoPos=Lmango.body.position
  var stonePos=Lstone.body.position

  var distance=dist(stonePos.x,stonePos.y,mangoPos.x,mangoPos.y)
  if(distance<=Lmango.r + Lstone.r)
  {
	  Matter.Body.setStatic(Lmango.body,false);
  }
}


