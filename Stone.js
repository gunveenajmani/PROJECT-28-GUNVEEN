class Stone{

    constructor(x, y){
        var options={
            restitution:0,
            friction:1,
            density:1.2
        }
        this.Body= Bodies.circle(x, y, 25, options);
        this.image= loadImage("stone.png");
        this.radius=25;
        World.add(world, this.Body);
    }

    display(){
        push();
    
       imageMode(CENTER);
       translate(this.Body.position.x, this.Body.position.y);
       rotate(this.Body.angle);
       image(this.image, 0,0 ,this.radius, this.radius);
       pop();
    }
}