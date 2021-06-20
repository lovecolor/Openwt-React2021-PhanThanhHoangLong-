class Point{
    private x:number=0.0
    private y:number=0.0
    constructor(x:number,y:number){
        this.x=x
        this.y=y
    }
    public getX():number{
        return this.x
    }
    public setX(x:number):void{
        this.x=x
    }
    public getY():number{
        return this.y
    }
    public setY(y:number):void{
        this.y=y
    }
    public setXY(x:number,y:number):void{
        this.x=x
        this.y=y
    }
    public getXY():[number,number]{
        return [this.x,this.y]
    }
    public toString():String{
        return `(${this.x},${this.y})`
    }
}
class MovablePoint extends Point
{
    private xSpeed:number=0.0
    private ySpeed:number=0.0
    constructor(x:number,y:number,xSpeed:number,ySpeed:number){
        super(x,y)
        this.xSpeed=xSpeed
        this.ySpeed=ySpeed
    }
    public getXSpeed():number{
        return this.xSpeed
    }
    public setXSpeed(xSpeed:number):void{
        this.xSpeed=xSpeed
    }
    public getYSpeed():number{
        return this.ySpeed
    }
    public setYSpeed(ySpeed:number):void{
        this.ySpeed=ySpeed
    }
    public setSpeed(xSpeed:number,ySpeed:number):void{
        this.xSpeed=xSpeed
        this.ySpeed=ySpeed
    }
    public getSpeed():[number,number]{
        return [this.xSpeed,this.ySpeed]
    }
    public toString():String{
        return `${super.toString()},speed=(${this.xSpeed},${this.ySpeed})`
    }
    public move():MovablePoint{
        super.setX(super.getX()+this.xSpeed)
        super.setY(super.getY()+this.ySpeed)
        return this
    }
}
console.log(new MovablePoint(1,1,2,2).move().toString())