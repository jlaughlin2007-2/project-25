class paper{
    constructor(){
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.image=loadImage("paper.png");
        this.paper = Bodies.circle(100,600,20,options);
        World.add(world,this.paper);
        
    }
    display(){
     
        imageMode(CENTER);
		image(this.image,this.paper.position.x,this.paper.position.y,60,60);
    }
}