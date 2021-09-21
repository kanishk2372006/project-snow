
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
const Constraint = Matter.Constraint;
var balls =[]

function preload() {
  backgroundImg = loadImage("snow3.jpg");
  img1= loadImage("snow2.jpg");
  img2=loadImage("snow4.webp");
  img3=loadImage("snow5.webp");
  this.image=loadImage("snow1.jpg")
}





function setup() {
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
  
  this.r = 10;
  this.body = Bodies.circle(400,200,40);
  World.add(world, this.body);

  

}

function draw() {
  background(backgroundImg);  
  Engine.update(engine); 


if(frameCount%90===0){
  ellipseMode(RADIUS) ;
  ellipse(this.body.position.x,this.body.position.y,40)
  
  




}

   
  drawSprites();
}


async function daynight(){

  var day = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var night = await day.json();
  
  var apple = night.datetime
  var cat = apple.slice(11,13);
  console.log(cat);
 
if(cat>=06 && cat<=18){
   bg="snow3.jpg"



}
else{
bg="snow1.jpg"




}

}