class stone
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
            restitution:0,
            friction:1,
            density:1.2		
        }
		this.image=loadImage("images/stone.png");
        this.r=r
        this.body=Bodies.circle(x,y,r,options);
 		World.add(world, this.body);

	}
	display()
	{
			var Pos=this.body.position;		
			push()
			imageMode(CENTER)
		    image(this.image,Pos.x,Pos.y,this.r, this.r);
			pop()
			
	}

}