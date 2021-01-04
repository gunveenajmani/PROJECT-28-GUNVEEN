class Mango{

    constructor(x, y){
        var options={
            isStatic:true,
            restitution:0,
            friction:1
           // density:1
        }
        this.Body= Bodies.circle(x, y, 25, options);
        this.radius =25;
        this.image= loadImage("mango.png");
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

