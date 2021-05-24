class Paper 
{
  constructor(x,y,radius){
    var options={
        restitution:0.7,
        friction:0.1,
        density:0.1
    }
    this.body=Bodies.circle(200,270,20,options)
    this.radius=20;
    World.add(world,this.body);
}
display(){
    var pos=this.body.position;
    var angle=this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);

    fill("#000099");
    strokeWeight(8);
stroke("#00ff00");
    ellipse(0,0,40);
    pop();
}
}
