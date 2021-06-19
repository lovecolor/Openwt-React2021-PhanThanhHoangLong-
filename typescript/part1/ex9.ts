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
        return `Ball[(${this.x},${this.y}),spedd=(${this.xDelta},${this.yDelta})]`
    }
}
const ball=new Ball(1,1,2,2,2)
ball.move()
console.log(ball.toString())