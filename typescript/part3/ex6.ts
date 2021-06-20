class Ball {
    x: number
    y: number
    radius: number
    xDelta: number
    yDelta: number
    constructor(x: number, y: number, radius: number, xDelta: number, yDelta: number) {
        this.x = x
        this.y = y
        this.radius=radius
        this.xDelta=xDelta
        this.yDelta=yDelta
    }
    getX():number{
        return this.x
    }
    getY():number{
        return this.y
    }
    setX(x:number):void{
        this.x=x
    }
    setY(y:number):void{
        this.y=y
    }
    getRadius():number{
        return this.radius
    }
    setRadius(radius:number):void{
        this.radius=radius

    }
    getXDelta():number{
        return this.xDelta
    }
    getYDelta():number{
        return this.yDelta
    }
    setXDelta(xDelta:number):void{
        this.xDelta=xDelta
    }
    setYDelta(yDelta:number):void{
        this.yDelta=this.yDelta
    }
    move():void{
        this.x+=this.xDelta
        this.y+=this.yDelta
    }
    reflectHorizontal():void{
        this.xDelta=-this.xDelta
    }
    reflectVertical():void{
        this.yDelta=-this.yDelta
    }
    toString():String{
        return `Ball[(${this.x},${this.y}),speed=(${this.xDelta},${this.yDelta})]`
    }
}
class Container{
    x1:number
    y1:number
    x2:number
    y2:number
    constructor(x:number,y:number,width:number,height:number){
        this.x1=x
        this.y1=y
        this.x2=this.x1+width-1
        this.y2=this.y1+height-1
    }
    getX():number{
        return this.x1
    }
    getY():number{
        return this.y1
    }
    getWidth():number{
        return this.x2-this.x1+1
    }
    getHeight():number{
        return this.y2-this.y1+1
    }
    collides(ball:Ball):boolean{
        if(ball.getX()-ball.getRadius()<this.x1||ball.getX()+ball.getRadius()>this.x2)
        ball.reflectHorizontal()
        if(ball.getY()-ball.getRadius()<this.y1||ball.getY()+ball.getRadius()>this.y2)
        ball.reflectVertical()
        return true
    }
    toString():String{
        return `Container[(${this.x1},${this.y1}),(${this.x2},${this.y2})]`
    }
}
const ball=new Ball(1,1,2,2,2)
const container:Container=new Container(0,0,10,10)
console.log(container.toString())
for(let i=0;i<10;i++)
{
   ball.move()
   container.collides(ball)
   console.log(ball.toString()) 
}
console.log(ball.toString())