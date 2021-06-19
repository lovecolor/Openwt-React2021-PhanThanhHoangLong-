class Dates{
    day:number
    month:number
    year:number
    constructor(day:number,month:number,year:number){
        this.day=day
        this.month=month
        this.year=year
    }
    getDay():number{
        return this.day
    }
    getMonth():number{
        return this.month
    }
    getYear():number{
        return this.year
    }
    setDay(day:number):void{
        this.day=day
    }
    setMonth(month:number):void{
        this.month=month
    }
    setYear(year:number):void{
        this.year=year
    }
    toString():String{
        return `${this.day<10&&0}${this.day}/${this.month<10&&0}${this.month}/${this.year}`
    }
}
const date=new Dates(1,1,2000)
console.log(date.toString())