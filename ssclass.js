class ssclass{
    constructor(a,b){
        var options={
            bodyA : a,
            pointB : b,
            stiffness : 0.4,
            length : 10,
        }
        this.body = Constraint.create(options);

        this.pointB = b;

        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");

        World.add(world,this.body);
    }

    fly(){
        this.body.bodyA = null
    }

    attach(p){
        this.body.bodyA = p;
    }

    display(){

        image(this.sling1, 200, 20);
        image(this.sling2, 170, 20);

        if(this.body.bodyA){
            var posA = this.body.bodyA.position;
            var posB =  this.pointB;

            push();
            strokeWeight(7);
            stroke(49,22,8);

            if(posA.x<220){
                line(posA.x - 20, posA.y, posB.x - 10, posB.y );
                line(posA.x - 20, posA.y, posB.x + 30, posB.y );
                image(this.sling3, posA.x - 30, posA.y - 10, 15, 30);     
            }
            else{
                line(posA.x + 25, posA.y, posB.x - 10, posB.y );
                line(posA.x + 25, posA.y, posB.x + 30, posB.y );
                image(this.sling3, posA.x + 27, posA.y - 10, 15, 30);    
            }

            pop();
        }
    }

}