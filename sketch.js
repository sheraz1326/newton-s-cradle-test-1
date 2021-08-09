const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var roof;
var bobl,bob2,bob3,bob4,bob5;
var ground;
var con,con2,con3,con4,con5;



function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;

  var bob_options = {
    restitution: 0.7
  }

  var roof_options = {
	  isStatic = true
  }
  
  roof = Bodies.rectangle(150,245,100,10,roof_options);
  World.add(world,roof);
  
  bob1 = Bodies.circle(100,250,10,bob_options);
  World.add(world,bob1);

 // bob2 = Bodies.circle(120,150,10,bob_options);
  //World.add(world,bob2);

  //bob3 = Bodies.circle(140,150,10,bob_options);
 // World.add(world,bob3);

  
  
  con = Matter.Constraint.create({
          pointA:{x:100,y:50},
          bodyB:bob1,
          pointB:{x:0,y:0},
          length:100,
          stiffness:0.1
        });
  
      World.add(world,con);

  //con2 = Matter.Constraint.create({
//		bodyA : roof,
//		pointA : {x:0 , y:0},
//		bodyB : ball2,
//		pointB : {x:0 , y:0},
//		length : 100,
//		stiffness : 0.1
//	  })

//	  World.add(world,con2);
      
  
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
  
}

function draw() 
{
  background(51);
  Engine.update(engine);
  ellipse(bob1.position.x,bob1.position.y,10);
  
  //rect(roof.position.x,roof.position.y,100,10);

  push();
  strokeWeight(2);
  stroke(255);
  line(con.pointA.x,con.pointA.y,bob1.position.x,bob1.position.y);
  
  pop();
  
}

function keyPressed()
{
  if(keyCode==LEFT_ARROW)
    {
      Matter.Body.applyForce(bob1,{x:0,y:0},{x:-0.005,y:0});
    }
}

