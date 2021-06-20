class Shape{
    private color:String="red"
    private filled:boolean=true
    constructor(color:String,filled:boolean){
        this.color=color
        this.filled=filled
    }
    public getColor():String{
        return this.color
    }
    public setColor(color:String):void{
        this.color=color
    }
    public isFilled():boolean{
        return this.filled
    }
    public setFilled(filled:boolean):void{
        this.filled=filled
    }
    public toString():String{
        return `Shape[color=${this.color},filled=${this.filled}]`
    }
}
class Circle extends Shape{
    private radius:number=1.0
    constructor(radius:number,color:String,filled:boolean){
        super(color,filled)
        this.radius=radius
    }
    public getRadius():number{
        return this.radius
    }
    public setRadius(radius:number):void{
        this.radius=radius
    }
    public getArea():number{
        return this.radius**2*Math.PI
    }
    public getPerimeter():number{
        return this.radius*2*Math.PI
    }
    public toString():String{
        return `Circle[${super.toString()},radius=${this.radius}]`
    }
}
class Rectangle extends Shape{
    private width:number=1.0
    private length:number=1.0
    constructor(width:number,length:number,color:String,filled:boolean){
        super(color,filled)
        this.width=width
        this.length=length
    }
    public getWidth():number{
        return this.width
    }
    public setWidth(width:number):void{
        this.width=width
    }
    public getLength():number{
        return this.length
    }
    public setLength(length:number):void{

        this.length=length
    }
    public getArea():number{
        return this.width*this.length
    }
    public getPerimeter():number{
        return (this.width+this.length)*2
    }
    public toString():String{
        return `Rectangle[${super.toString()},width=${this.width},length=${this.length}]`
    }
}
class Square extends Rectangle{
    constructor(side:number,color:String,filled:boolean){
        super(side,side,color,filled)
    }
    public getSide():number{
        return super.getWidth()
    }
    public setSide(side:number):void{
        super.setWidth(side)
        super.setLength(side)
    }
    public setWidth(side:number):void{
        super.setWidth(side)
        super.setLength(side)
    }
    public setLength(side:number):void{
        super.setWidth(side)
        super.setLength(side)
    }
    public toString():String{
        return `Square[${super.toString()}]`
    }

}
console.log(new Square(5,'red',true).toString())