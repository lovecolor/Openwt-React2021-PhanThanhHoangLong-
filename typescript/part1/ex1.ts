class Circle {
    radius: number = 1.0
color:String="red"
    constructor(radius: number,color:String) {
        this.radius = radius
        this.color=color
    }
    
    getRadius(): number {
        return this.radius
    }
    getColor():String{
        return this.color
    }
    setRadius(radius: number): void {
        this.radius = radius
    }
    setColor(color:String):void{
        this.color=color
    }
    getArea():number{
        return this.radius*this.radius*Math.PI
    }
    
    toString():String{
return `Circle[radius=${this.radius},color=${this.color}]`
    }

}
const circle=new Circle(5,'blue');
console.log(circle.toString())