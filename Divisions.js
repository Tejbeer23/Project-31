class Divisions{
    constructor(x,y,width,height){
        var options={
            isStatic : true
        }
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x,y,width,height);
        World.add(world,this.body);
    }

    display(){
        rectMode(CENTER);
        var pos = this.body.position;
        fill("white")
        rect(x,y,this.width,this.height);
    }
}