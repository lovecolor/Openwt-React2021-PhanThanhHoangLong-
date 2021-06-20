interface GeometriObject{
    getArea():number
     getPerimeter():number
}
class Circle implements GeometriObject{
    protected radius:number
    constructor(radius:number){
        this.radius=radius
    }
    public toString():String{
        return `Circle[radius=${this.radius}]`
    }
   
    public getArea():number{
        return this.radius**2*Math.PI
    }
   
    public getPerimeter():number{
        return this.radius*2*Math.PI
    }
}
interface Resizable{
    resize(percent:number):void
}
class ResizableCircle extends Circle implements Resizable{
    constructor(radius:number){
        super(radius)
    }
    public toString():String{
        return `ResizableCircle[${super.toString()}]`
    }
    public resize(percent:number):void{
        this.radius*=percent/100.0
    }
}