class Point2D {
    private x: number = 0.0
    private y: number = 0.0
    constructor(x: number, y: number) {
        this.x = x
        this.y = y
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
class Point3D extends Point2D{
    private z:number=0.0
    constructor(x:number,y:number,z:number){
        super(x,y)
        this.z=z
    }
    public getZ():number{
        return this.z
    }
    public setZ(z:number):void{
        this.z=z
    }
    public setXYZ(x:number,y:number,z:number):void{
        super.setXY(x,y)
        this.z=z
    }
    public getXYZ():[number,number,number]{
        return [...super.getXY(),this.z]
    }
    public toString():String{
        return `(${super.getX()},${super.getY()},${this.z})`
    }
}