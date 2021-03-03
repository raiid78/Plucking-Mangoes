class stone{
    constructor(x, y, width, height, angle){
        var options = {
            isStatic: false,
            restitution: 0,
            friction: 1,
            density: 1.2,
        }
        World.add(world, this.stone);
    }
    fly(){
        this.stone.bodyA = null;    
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}