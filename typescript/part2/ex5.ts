enum gender {
    MALE = 'm',
    FEMALE = 'f'
}

class Customer {
    id: number
    name: string
    gender: gender
    constructor(id: number, name: string, gender: gender) {
        this.id = id
        this.name = name
        this.gender = gender
    }
    getID(): number {
        return this.id
    }
    getName(): String {
        return this.name
    }
    getGender(): gender {
        return this.gender
    }

    toString(): String {
        return `name(${this.id})`
    }
}
class Account {
    id: number
    customer: Customer
    balance: number
    constructor(id: number, customer: Customer, balance: number=0.0) {
        this.id = id
        this.customer = customer
        this.balance = balance
    }
    getID(): number {
        return this.id
    }
    getCustomer(): Customer {
        return this.customer
    }
    getBalance(): number {
        return this.balance
    }
    setBalance(balance:number):void{
        this.balance=balance
    }
    toString():string{
        

        return `${this.customer.toString()} balance=$${this.balance.toString().split(".").reduce((acc,val)=>acc===""?acc+val:acc+"."+val.slice(0,val.length>=2?2:val.length),"")}`
    }
    getCustomerName():String{
return this.customer.getName()
    }
    deposit(amount:number):Account{
        this.balance+=amount
        return this
    }
    widthdraw(amount:number):Account{
        if(this.balance>=amount) this.balance-=amount
        else{
            console.log("amount withdrawn exceeds the current balance!")
        }
        return this
    }

}
console.log(new Account(1,new Customer(1,'long',gender.MALE),1.2222).toString())