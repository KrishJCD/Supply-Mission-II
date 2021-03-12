class Box
{
    constructor(x,y,width,height)
    {
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.sprite=createSprite(this.x,this.y,this.width,this.height);
        this.sprite.shapeColor="red";
        this.body=Bodies.rectangle(this.x,this.y,this.width,this.height,{isStatic:true});
        World.add(world,this.body);
    }
    display()
    {
        drawSprites();
    }
}