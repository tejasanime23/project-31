class Particle{
    constructor(x,y){
       this.r=10;
       this.body = Bodies.circle(x, y, this.r);
       World.add(world, this.body);
    }

display() {
    var pos = this.body.position;
    var angle = this.body.angle;
 
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    this.color=color(random(0,255),random(0,255),random(0,255));
    ellipseMode(RADIUS);
    ellipse(0,0,this.r,this.r);
    pop();

}
}