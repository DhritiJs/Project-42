class Umbrella{
    constructor(x,y){
var options = {
    isStatic: true
    }
    
 this.r=100;
 this.x=x;
 this.y=y;
 this.body = Bodies.circle(this.x,this.y,this.r,options);
 this.image = loadImage("images/Walking Frame/walking_1.png")
  World.add(world, this.body);
}

display(){
var pos =this.body.position;
push ();
translate(pos.x,pos.y)
imageMode(CENTER);
image(this.image,0, 0,this.r*3,this.r*3);
pop ();
}
    
}