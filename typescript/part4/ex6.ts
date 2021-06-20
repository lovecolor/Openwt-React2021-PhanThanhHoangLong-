class Animal{
    private name:String
    constructor(name:String){
        this.name=name
    }
    public toString():String{
        return `Animal[name=${this.name}]`
    }
}
class Mammal extends Animal{
    constructor(name:String){
        super(name)
    }
    public toString():String{
        return `Mamal[${super.toString()}]`
    }
}
class Cat extends Mammal{
    constructor(name:String){
        super(name)
    }
    public greets():void{
        console.log("Meow")
    }
    public toString():String{
        return `Cat[${super.toString()}]`
    }
}
class Dog extends Mammal{
    constructor(name:String){
        super(name)
    }
    public greets():void{
        console.log("Woof")
    }
    
    public toString():String{
        return `Dog[${super.toString()}]`
    }

    
}
console.log(new Animal("kiki").toString())
console.log(new Mammal("kiki2").toString())
console.log(new Cat("doraemon").toString())
console.log(new Dog("nasus").toString())