class Circle {
    radius: number = 1.0

    constructor(radius: number) {
        this.radius = radius
    }
    getRadius(): number {
        return this.radius
    }
    setRadius(radius: number): void {
        this.radius = radius
    }
    getArea():number{
        return this.radius*this.radius*Math.PI
    }
    getCircumference():number{
        return this.radius*2*Math.PI
    }
    toString():String{
return `Circle[radius=${this.radius}]`
    }

}
const circle=new Circle(5);
console.log(circle.toString())