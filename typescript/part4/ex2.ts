class Person{
    name:String
    address:String
    constructor(name:String,address:String){
        this.name=name
        this.address=address
    }
    getName():String{
        return this.name
    }
    getAddress():String{
        return this.address
    }
    toString():String{
        return `Person[name=${this.name},address=${this.address}]`
    }
}
class Student extends Person{
    program:String
    year:number
    fee:number
    constructor(name:String,address:String,program:String,year:number,fee:number){
        super(name,address)
        this.program=program
        this.year=year
        this.fee=fee
    }
    getProgram():String{
        return this.program
    }
    setProgram(program:String):void{
        this.program=program
    }
    getYear():number{
        return this.year
    }
    setYear(year:number):void{
        this.year=year
    }
    getFee():number{
        return this.fee
    }
    setFee(fee:number):void{
        this.fee=fee
    }
    toString():String{
        return `Studet[${super.toString()}],program=${this.program},year=${this.year},fee=${this.fee}`
    }
}
class Staff extends Person{
    school:String
    pay:number
    constructor(name:String,address:String,school:String,pay:number){
        super(name,address)
        this.school=school
        this.pay=pay
    }
    getSchool():String{
        return this.school
    }
    setSchool(school:String):void{
        this.school=school
    }
    getPay():number{
        return this.pay
    }
    setPay(pay:number):void{
        this.pay=pay
    }
    toString():String{
        return `Staff[${super.toString()},school=${this.school},pay=${this.pay}]`
    }
}
console.log(new Student('long','390/20','frontend',2000,4).toString())
console.log(new Staff('cong','truong nu vuong','spdn',2000).toString())