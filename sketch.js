var a,b;

function setup() {
  createCanvas(800,400);
  a=createSprite(400, 200, 50, 50);
  b=createSprite(100,200,50,50);
  a.shapeColor("pink");
  b.shapeColor("pink");

}

function draw() {
  background(255,255,255);  
  a.x=world.mouseX;
  a.y=world.mouseY;

  console.log(a.x-b.x);
  drawSprites();
}