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
class MyCircle {
    center: MyPoint
    radius: number
    constructor(center: MyPoint = new MyPoint(0, 0), radius: number = 1) {
        this.center = center
        this.radius = radius
    }
    getRadius(): number {
        return this.radius
    }
    getCenter(): MyPoint {
        return this.center
    }
    setRadius(radius: number): void {
        this.radius = radius
    }
    setCenter(center: MyPoint): void {
        this.center = center
    }
    getCenterX(): number {
        return this.center.getX()
    }
    getCenterY(): number {
        return this.center.getY()
    }
    setCenterX(x: number): void {
        this.center.setX(x)
    }
    setCenterY(y: number): void {
        this.center.setY(y)
    }
    getCenterXY(): [number, number] {
        return this.center.getXY()
    }
    setCenterXY(x: number, y: number): void {
        this.center.setXY(x, y)
    }
    toString(): String {
        return `MyCircle[radius=${this.radius},center=${this.center.toString()}]`
    }
    getArea(): number {
        return this.radius * this.radius * Math.PI
    }
    getCircumference(): number {
        return this.radius * 2 * Math.PI
    }
    distance(another: MyCircle): number {
        return this.center.distance(another.getCenter())
    }
}
const circle: MyCircle = new MyCircle(new MyPoint(0, 0), 3)
console.log(circle.getCenterXY())
console.log(circle.distance(circle))