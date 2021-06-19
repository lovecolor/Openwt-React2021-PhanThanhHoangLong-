class Rectangle {
    length: number = 1.0
    width: number = 1.0
    constructor(length: number, width: number) {
        this.length = length
         this.width = width

    }
    getLength(): number {
        return length
    }
    getWidth(): number {
        return this.width
    }
    setLength(length: number): void {
        this.length = length
    }
    setWidth(width: number): void {
        this.width = width
    }
    getArea(): number {
        return length * this.width
    }
    getPerimeter(): number {
        return (length + this.width) * 2
    }
    toString(): string {
        return `Rectangle[length=${this.length},width=${this.width}]`
    }
}
const rectangle=new Rectangle(1,1)
console.log(rectangle.toString())
