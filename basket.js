class Basket{
    constructor(x,y){
    var option={
        "isStatic":true
    }
    this.body=Bodies.rectangle(x,y,200,90,option)
   
    this.image=loadImage("dustbingreen.png")
    World.add(world, this.body);
    
    }
    display(){
    imageMode(CENTER)
    image(this.image,this.body.position.x,this.body.position.y,200,300);
        
   
    }
    }