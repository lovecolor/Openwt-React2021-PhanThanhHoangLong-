class DiscountRate {
    private  serviceDiscountPremium: number = 0.2
    private serviceDiscountGold: number = 0.15
    private serviceDiscountSliver: number = 0.1
    private productDiscountPremium: number = 0.1
    private productDiscountGold: number = 0.1
    private productDiscountSliver: number = 0.1
    public getServiceDiscountRate(type:String):number{
        if(type==="premium") return this.serviceDiscountPremium
        if(type==="gold") return this.serviceDiscountGold
        return this.serviceDiscountSliver
    }
    public  getProductDiscountRate(type:String):number{
        if(type==="premium") return this.productDiscountPremium
        if(type==="gold") return this.productDiscountGold
        return this.productDiscountSliver
    }
}
class Customer{
    private name:String
    private member:boolean=false
    private memberType:String
    constructor(name:String){
        this.name=name
    }
    public getName():String{
        return this.name
    }
    public isMember():boolean{
        return this.member
    }
    public setMember(member:boolean):void{
        this.member=member
    }
    public getMemberType():String{
        return this.memberType
    }
    public setMemberType(type:String):void{
        this.memberType=type
    }
    public toString():String{
        return `Customer[name=${this.name},member=${this.member},type=${this.memberType}]`
    }
}
class Visit{
    private customer:Customer
    private date:Date
    private servieExpense:number
    private productExpense:number
    constructor(name:String,date:Date){
        this.customer=new Customer(name)
        this.date=date
    }
    public getName():String{
        return this.customer.getName()
    }
    public getServiceExpense():number{
        return this.servieExpense
    }
    public setServiceExpense(ex:number):void{
        this.servieExpense=ex
    }
    public getProductExpense():number{
        return this.productExpense
    }
    public setProductExpense(ex:number):void{
        this.productExpense=ex
    }
    public getTotalExpense():number{
        return this.servieExpense+this.productExpense
    }
    public toString():String{
        return `Visit[${this.customer.toString()},date=${this.date},serviceEx=${this.servieExpense},productEx=${this.productExpense}]`
    }
}