class Paper{
constructor(x,y,radius){
    
    var option={
   isStactic :false,
    restitution:0.3,
    friction:0.5,
    density:1.2
  
  }

  this.image=loadImage("paper.png")
this.body=Bodies.circle(x,y,radius,option)
this.radius=radius

World.add(world,this.body)

}
display(){
  var pos=this.body.position;
  push();
  translate(pos.x,pos.y);
 imageMode(CENTER)
 image(this.image,0,0,this.radius,this.radius);
pop()

}
}


