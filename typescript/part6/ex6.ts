abstract class Animal{
    private name:String
    constructor(name:String){
        this.name=name
    }
    public abstract greets():void
}
class Cat extends Animal{
    constructor(name:String){
        super(name)
    }
    public greets():void{
        console.log("Meow")
    }
}
class Dog extends Animal{
    constructor(name:String){

        super(name)
    }
    public greets():void{
        console.log("Woof")
    }
    
}
class BigDog extends Dog{
    constructor(name:String){
        super(name)
    }
    public greets():void{
        super.greets()
    }
}