class Circle{
    radius:number=1.0
    color:String="red"
    constructor(radius:number,color:String){
        this.radius=radius
        this.color=color
    }
    getRadius():number{
        return this.radius
    }
    setRadius(radius:number):void{
        this.radius=radius
    }
    getColor():String{
        return this.color
    }
    setColor(color:String):void{
        this.color=color
    }
    getArea():number{
        return this.radius**2*Math.PI
    }
    toString():String{
        return `Circle[radius=${this.radius},color=${this.color}]`
    }
}
class Cylinder extends Circle{
    height:number=1.0
    constructor(radius:number,height:number,color:String){
        super(radius,color)
        this.height=height
    }
    getHeight():number{
        return this.height
    }
    setHeight(height:number):void{
        this.height=height
    }
    getVolume():number
    {
        return this.getArea()*this.height
    }
}