const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;
 
var particle;
var plinkos = [];
var divisions = [];
var divisionHeight=300;
var ground;
var score = 0;
var count = 0;
var gameState = "play";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,height,width,20);
  


  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }


  for (var j = 75; j <=width; j = j + 50) {
      plinkos.push(new Plinko(j,75));
  }

  for (var l = 50; l <=width-10; l = l + 50) {    
      plinkos.push(new Plinko(l,175));
  }

  for (var m = 75; m <=width; m = m + 50) {
      plinkos.push(new Plinko(m,275));
  }

  for (var n = 50; n <=width-10; n = n + 50) {
      plinkos.push(new Plinko(n,375));
  }
    

 
 
  
  
}
 


function draw() {
  background("black");
  fill("white");
  textSize(20)
  text("Score : "+score,20,30);

  textSize(30);
  text("500   500    500   500    100    100   100   200    200    200",17,530);

  //textSize(30);
  //text("500",)
  Engine.update(engine);

  ground.display();
  mousePressed();
  
  //if(frameCount%60===0){
    //particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
    //score++;
  //}
  if (particle != null){
    particle.display();

    if (particle.body.position.y>760){
      if (particle.body.position.x < 300){
        score = score+500;
        particle = null;
      }
    }
  }

  //if (particle != null){
    //particle.display();

    //if (particle.body.position.y>600){
      //if (particle.body.position.x < 301){
        //score = score+100
        //particle = null;
      //}
    //}
  //}

  //if (particle != null){
    //particle.display();

   // if (particle.body.position.y>900){
     // if (particle.body.position.x < 601){
        //score = score+200
       // particle = null;
    //  }
    //}
  //}

  for (var j = 0; j < plinkos.length; j++) { 
    plinkos[j].display();
  } 

  for (var l = 0; l < plinkos.length; l++) { 
    plinkos[l].display();
  }

  for (var m = 0; m < plinkos.length; m++) {
    plinkos[m].display();
  }

  for (var n = 0; n < plinkos.length; n++) {
    plinkos[n].display();
  }

  for (var k = 0; k < divisions.length; k++) { 
    divisions[k].display();
   }
}

function mousePressed(){
  if (gameState !== "end"){
    particle = new Particle(mouseX,10,10,10);
  }
}