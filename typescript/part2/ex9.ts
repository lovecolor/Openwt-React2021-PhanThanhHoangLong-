class MyPoint {
    x: number
    y: number
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y
    }
    getX(): number {
        return this.x;
    }
    getY(): number {
        return this.y
    }
    setX(x: number): void {
        this.x = x
    }
    setY(y: number): void {
        this.y = y
    }
    getXY(): [number, number] {
        return [this.x, this.y]
    }
    setXY(x: number, y: number): void {
        this.x = x
        this.y = y
    }
    toString(): String {
        return `(${this.x},${this.y})`
    }
    distance(another: MyPoint): number {


        return Math.sqrt((another.getX() - this.x) * (another.getX() - this.x) + (another.getY() - this.y) * (another.getY() - this.y))
    }


}
class MyTriangle{
    v1:MyPoint
    v2:MyPoint
    v3:MyPoint
    constructor(v1:MyPoint,v2:MyPoint,v3:MyPoint){
     
        this.v1=v1
        this.v2=v2
        this.v3=v3
    }
    toString():String{
        return `MyTriangle[v1=${this.v1.toString()},v2=${this.v2.toString()},v3=${this.v3.toString()}]`
    }
    getPerimeter():number{
        return this.v1.distance(this.v2)+this.v2.distance(this.v3)+this.v3.distance(this.v1)
    }
    getType():String{
        const width1=this.v1.distance(this.v2),width2=this.v2.distance(this.v3),width3=this.v1.distance(this.v3)
        if(width1!=width2&&width2!=width3&&width3!=width1) return "Scalene"
        if(width1===width2&&width2===width3) return "Equilateral"
        return "isosceles"
    }
}
console.log(new MyTriangle(new MyPoint(0,0),new MyPoint(0,3),new MyPoint(4,0)).getType())
console.log(new MyTriangle(new MyPoint(0,0),new MyPoint(0,3),new MyPoint(3,0)).getType())