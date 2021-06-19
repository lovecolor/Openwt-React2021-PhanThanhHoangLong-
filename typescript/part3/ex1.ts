class MyComplex{
    real:number
    imag:number
    constructor(real:number=0.0,imag:number=0.0){
        this.real=real
        this.imag=imag
    }
    getReal():number{
        return this.real
    }
    setReal(real:number):void{
        this.real=real
    }
    getImag():number{
        return this.imag
    }
    setImag(imag:number):void{
        this.imag=imag
    }
    setValue(real:number,imag:number):void{
        this.real=real
        this.imag=imag
    }
    toString():String{
        return `"real+imagi", e.g., "${this.real}+${this.imag}+i"`
    }
    isReal():boolean{
        return this.imag===0
    }
    isImaginary():boolean{
        return this.real===0
    }
    equals(another:MyComplex):boolean{
        return this.real===another.real&&this.imag===another.imag
    }
    magnitude():number{
        return Math.sqrt(this.real*this.real+this.imag*this.imag)
    }
    addInto(right:MyComplex):MyComplex{
        this.real+=right.real
        this.imag+=right.imag
        return this
    }
    addNew(right:MyComplex):MyComplex{
        return new MyComplex(this.real+right.real,this.imag+right.imag)
    }

}
const complex:MyComplex=new MyComplex(1,0)
console.log(complex.toString())