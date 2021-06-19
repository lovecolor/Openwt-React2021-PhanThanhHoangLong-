class Account {
    id: String
    name: String
    balance: number
    constructor(id: String, name: String, balance: number = 0) {
        this.id = id
        this.name = name
        this.balance = balance
    }
    getID(): String {
        return this.id
    }
    getName(): String {
        return this.name
    }
    getBalance(): number {
        return this.balance
    }
    credit(amount: number): number {
        return this.balance += amount
    }
    debit(amount: number): number {
        if (amount <= this.balance) this.balance -= amount
        else {
            console.log("Amount exceeded balance")
        }
        return this.balance
    }
    transferTo(another: Account, amount: number): number {
        if (amount <= this.balance) {
            this.balance -= amount
            another.credit(amount)
        }
        else {
            console.log("Amount exceeded balance")
        }
        return this.balance
    }
    toString():String{
        return `Acount[id=${this.id},name=${this.name},balance=${this.balance}]`
    }
}
const account1=new Account('ac1','long',1000)
const account2=new Account('ac2','hoang',2000)
account1.transferTo(account2,1000)
console.log(account2.toString())
console.log(account1.toString())