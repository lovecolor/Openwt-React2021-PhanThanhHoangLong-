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
class MyLine {
    begin: MyPoint
    end: MyPoint
    constructor(begin: MyPoint, end: MyPoint) {
        this.begin = begin
        this.end = end
    }
    getBegin(): MyPoint {
        return this.begin
    }
    setBegin(begin: MyPoint): void {
        this.begin = begin
    }
    getEnd(): MyPoint {
        return this.end
    }
    setEnd(end: MyPoint): void {
        this.end = end
    }
    getBeginX(): number {
        return this.begin.getX()
    }
    setBeginX(x: number): void {
        this.begin.setX(x)
    }
    getBeginY(): number {
        return this.begin.getY()
    }
    setBeginY(y: number): void {
        this.begin.setY(y)
    }
    getEndX(): number {
        return this.end.getX()
    }
    setEndX(x: number): void {
        this.end.setX(x)
    }
    getEndY(): number {
        return this.end.getY()
    }
    setEndY(y: number): void {
        this.end.setY(y)
    }
    getBeginXY(): [number, number] {
        return this.begin.getXY()

    }
    setBeginXY(x: number, y: number): void {
        this.begin.setXY(x, y)
    }
    getEndXY():[number,number]{
        return this.end.getXY()
    }
    setEndXY(x:number,y:number):void{
        this.end.setXY(x,y)
    }
    getLength():number{
        return this.begin.distance(this.end)
    }
    getGradient():number{
        return Math.atan2((Math.abs(this.begin.getY()-this.end.getY())),Math.abs(this.begin.getX()-this.end.getX()))
    }
    toString():String{
        return `MyLine[begin=${this.begin.toString()},end=${this.end.toString()}]`
    }


}

console.log(new MyLine(new MyPoint(0,0),new MyPoint(3,4)).getGradient())