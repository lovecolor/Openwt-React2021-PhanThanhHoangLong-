interface Movable{
    moveUp():void
    moveDown():void
    moveLeft():void
    moveRight():void
}
class MovablePoint implements Movable{
    x:number
    y:number
    xSpeed:number
    ySpeed:number
    constructor(x:number,y:number,xSpeed:number,ySpeed:number){
        this.x=x
        this.y=y
        this.xSpeed=xSpeed
        this.ySpeed=ySpeed
    }
    public toString():String{
        return `(${this.x},${this.y}) speed=(${this.xSpeed},${this.ySpeed})`
    }
    public moveUp():void{
        this.y-=this.ySpeed
    }
    public moveDown():void{
        this.y+=this.ySpeed
    }
    public moveLeft():void{
        this.x-=this.xSpeed
    }
    public moveRight():void{
        this.x+=this.xSpeed
    }
}
