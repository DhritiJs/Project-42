class Drop{
    constructor(x,y) {
        var options = {
           restitution:0.4,
           friction:0.1,
        }
  
        this.r=5;
        this.x=x;
        this.y=y
        this.rain = Bodies.circle(this.x,this.y,this.r,options);
        World.add(world, this.rain);
      }
      display(){
        var pos =this.rain.position;
        push();
        translate(pos.x,pos.y);
        rotate (this.rain.angle);
        ellipseMode(CENTER);
        fill("blue")
        ellipse(0, 0, this.r, this.r);
        pop();
      }
      update(){
if(this.rain.position.y > height){
    Matter.Body.setPosition(this.rain,{x:random(0,400),y:random(0,400)});
}
      }
}