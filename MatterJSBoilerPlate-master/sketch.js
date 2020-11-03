
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var stone, tree, boy, ground, sling, boyimg;
var mango1, mango2, mango3, mango4, mango5, mangoimg;
function preload()
{
 boyimg = loadImage("boy.png");	
 mangoimg  = loadImage("mango.png");
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
  world = engine.world;
  tree = new Tree(600,250,400,450);
    boy = createSprite(150,380,150,250);
    boy.addImage(boyimg);
    boy.scale=0.1;
    stone = new Stone(width/4-100,320,30,40);
    mango1=new Mango(430,200,30);
  mango2=new Mango(440,150,30);
	mango3=new Mango(438,220,30);
	mango4=new Mango(470,150,30);
	mango5=new Mango(487,230,30);
	mango6=new Mango(490,235,30);
	mango7=new Mango(546,230,40);
	mango8=new Mango(500,150,40);
	mango9=new Mango(510,230,40);
	mango10=new Mango(520,200,40);
	mango11=new Mango(530,130,40);
	mango12=new Mango(540,160,40);

 ground = new Ground(width/2,470,width,80);
 
 sling = new constraint(stone.body,{x:width/4-100, y:320});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
 Engine.update(engine)
  tree.display();
  boy.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango6.display();
 mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
 mango12.display();
  stone.display();
  ground.display();
  sling.display();

  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);
  detectollision(stone,mango6);
  detectollision(stone,mango7);
  detectollision(stone,mango8);
  detectollision(stone,mango9);
  detectollision(stone,mango10);
  detectollision(stone,mango11);
  detectollision(stone,mango12);
  drawSprites();
 
}
function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  sling.fly();
}
function keyPressed(){
  if(keyCode===32){
      sling.attach(stone.body);
  }
  }
  function detectollision(stone,mango){
    mangoBodyPosition = mango.body.position;
    stoneBodyPosition = stone.body.position;

    var distance = dist(stoneBodyPostion.x,stonBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
  }
  function detectollision(lstone,lmango){
	
    mangoBodyPosition=lmango.body.position
    stoneBodyPosition=lstone.body.position
    
    var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
    //console.log(distance)
   //console.log(lmango.r+lstone.r)
      if(distance<=lmango.r+lstone.r)
      {
        console.log(distance);
       Matter.Body.setStatic(lmango.body,false);
      }
  
    }