const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var thunderGroup;
var thunder1,thunder2,thunder3,thunder4;
var person;
var raindrop=[];
var maxDrops=100;

function preload(){
    thunder1 = loadImage("images/thunderbolt/1.png")
    thunder2 = loadImage("images/thunderbolt/2.png")
    thunder3 = loadImage("images/thunderbolt/3.png")
    thunder4 = loadImage("images/thunderbolt/4.png")
}

function setup(){
    var canvas = createCanvas(400,800);
    engine = Engine.create();
    world = engine.world;


    for(var i=0;i<maxDrops;i++){
        raindrop.push(new Drop(random(0,400),random(0,400)));
    }
    person = new Umbrella(200,650);
    thunderGroup = new Group;
}

function draw(){
    background(0);
    Engine.update(engine);

    for(var i=0;i<raindrop.length;i++){
        raindrop[i].display();
        raindrop[i].update();
    }
lightning();
person.display();
drawSprites();
  
}   

function lightning(){
   
    if(frameCount%60===0){
        var thunder = createSprite(200,100,10,10);
        thunder.scale =0.5;
        thunder.lifetime = 20;
        var rand = Math.round(random(1,4));
        switch(rand) {
          case 1: thunder.addImage(thunder1);
                  break;
          case 2: thunder.addImage(thunder2);
                  break;
          case 3: thunder.addImage(thunder3);
                  break;
          case 4: thunder.addImage(thunder4);
                  break;
        
          default: break;
        }
        thunderGroup.add(thunder);
   
        
    }
}
