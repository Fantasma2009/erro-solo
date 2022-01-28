const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2;
var solo1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,50);
    box2 = new Box(300, 400, 50,50);
    solo1=new Solo(200, 380, 400, 20);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    solo1.display();
}