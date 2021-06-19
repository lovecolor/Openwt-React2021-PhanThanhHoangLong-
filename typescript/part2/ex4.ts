class Customer{
    id:number
    name:String
    discount:number
    constructor(id:number,name:String,discount:number){
        this.id=id
        this.name=name
        this.discount=discount
    }
 getID():number{
     return this.id
 }   
 getName():String{
     return this.name
 }
 getDiscount():number{
     return this.discount
 }
 setDiscount(discount:number):void{
     this.discount=discount
 }
 toString():String{
     return `name(${this.id})(${this.discount}%)`
 }
}
class Invoice{
    id:number
    customer:Customer
    amount:number
    constructor(id:number,customer:Customer,amount:number){
        this.id=id
        this.customer=customer
        this.amount=amount
    }
    getID():number{
        return this.id
    }
    getCustomer():Customer{
        return this.customer
    }
    setCustomer(customer:Customer):void{
        this.customer=customer
    }
    getAmount():number{
        return this.amount
    }
    setAmount(amount:number):void{
        this.amount=amount
    }
    getCustomerID():number{
        return this.customer.getID()
    }
    getCustomerName():String{
        return this.customer.getName()
    }
    getCustomerDiscount():number{
        return this.customer.getDiscount()
    }
    getAmountAfterDiscount():number{
        return this.amount*(100-this.customer.getDiscount())/100
    }
    toString():String{
        return `Invoice[id=${this.id},customer=${this.customer.toString()},amount=${this.amount}]`
    }
}
const item:Invoice=new Invoice(1,new Customer(1,"long",20),1000)
console.log(item.toString())
console.log(item.getAmountAfterDiscount())