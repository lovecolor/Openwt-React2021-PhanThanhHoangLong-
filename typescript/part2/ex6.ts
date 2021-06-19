class MyPoint{
    x:number
    y:number
    constructor(x:number,y:number){
        this.x=x;
        this.y=y
    }
    getX():number{
        return this.x;
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
    getXY():[number,number]{
        return [this.x,this.y]
    }
    setXY(x:number,y:number):void{
        this.x=x
        this.y=y
    }
    toString():String{
        return `(${this.x},${this.y})`
    }
    distance(another:MyPoint):number{
        
        
        return Math.sqrt((another.getX()-this.x)*(another.getX()-this.x)+(another.getY()-this.y)*(another.getY()-this.y))
    }
    
    
}
const point=new MyPoint(0,0)

console.log(point.distance(new MyPoint(3,4)))
