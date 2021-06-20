interface GeometriObject{
    getArea():number
     getPerimeter():number
}
class Circle implements GeometriObject{
    private radius:number
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
class Rectangle implements GeometriObject{
    private width:number
    private length:number
    constructor(width:number,length:number){
        
        this.width=width
        this.length=length
    }
    public toString():String{
        return `Rectangle[width=${this.width},length=${this.length}]`
    }
    public getArea():number{
        return this.width*this.length
    }
    public getPerimeter():number{
        return (this.width+this.length)*2
    }

}
console.log(new Rectangle(1,2).toString())