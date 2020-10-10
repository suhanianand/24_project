class Paper{
    constructor(x,y,radius){
        var options={
            restitution: 0.3,
            density: 1.2,
            friction: 0.5,
        }
        this.body= Bodies.circle(x,y,radius,options);
        World.add(world, this.body);
        this.radius= radius;
      }
      display(){
          ellipseMode(CENTER);
          ellipse(this.body.position.x, this.body.position.y, this.radius*2,this.radius*2);
      };
}
