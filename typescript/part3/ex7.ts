class Ball{
    x:number
    y:number
    z:number
    constructor(x:number,y:number,z:number){
        this.x=x
        this.y=y
        this.z=z
    }
    getX():number{
        return this.x
    }
    getY():number
    {
        return this.y
    }
    getZ():number{
        return this.z
    }
    setXYZ(x:number,y:number,z:number):void{
        this.x=x
        this.y=y
        this.z=z
    }
    toString():String{
        return `(${this.x},${this.y},${this.z})`
    }
}
class Player{
    number:number
    x:number
    y:number
    z:number=0.0
    constructor(number:number,x:number,y:number){
        this.number=number
        this.x=x
        this.y=y
        
    }
    move(xDisp:number,yDisp:number):void{
        this.x=xDisp
        this.y=yDisp
    }
    jump(zDisp:number):void{
        this.z=zDisp
    }
    near(ball:Ball):boolean{
        return Math.sqrt((this.x-ball.getX())**2+(this.y-ball.getY())**2+(this.z-ball.getZ())**2)==0;
    }
    kich(ball:Ball):void{
        ball.setXYZ(ball.getX()+10,ball.getY()+10,ball.getZ()+10)
    }

}