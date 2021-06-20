class Point {
    private x: number = 0.0
    private y: number = 0.0
    constructor(x: number, y: number) {
        this.x = x
        this.y = y
    }
    public getX(): number {
        return this.x
    }
    public setX(x: number): void {
        this.x = x
    }
    public getY(): number {
        return this.y
    }
    public setY(y: number): void {
        this.y = y
    }
    public setXY(x: number, y: number): void {
        this.x = x
        this.y = y
    }
    public getXY(): [number, number] {
        return [this.x, this.y]
    }
    public toString(): String {
        return `(${this.x},${this.y})`
    }
}
class PolyLine {
    private points: Point[] = []
    constructor(points: Point[]) {
        this.points = points
    }
    public appendPoint(point: Point): void {
        this.points.push(point)
    }
    public toString():String{

        return "{"+this.points.map(e=>e.toString()).join(",")+"}"
    }
    public getLength():number{
        return this.points.reduce((acc,val,i)=>i<this.points.length-1?acc+Math.sqrt((val.getX()-this.points[i+1].getX())**2+(val.getY()-this.points[i+1].getY())**2):acc,0)
    }
}
const polyline=new PolyLine([new Point(0,0),new Point(3,4),new Point(0,0)])
console.log(polyline.toString())
console.log(polyline.getLength())