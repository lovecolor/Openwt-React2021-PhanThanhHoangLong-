class InvoiceItem {
    id: String
    desc: String
    qty: number
    unitPrice: number
    constructor(id:String,desc:String,qty:number,unitPrice:number){
        this.id=id
        this.desc=desc
        this.qty=qty
        this.unitPrice=unitPrice
    }
    getID():String{
        return this.id
    }
    getDesc():String{
        return this.desc
    }
    getQty():number{
        return this.qty
    }
    setQty(qty:number):void{
        this.qty=qty
    }
    getUnitPrice():number{
        return this.unitPrice
    }
    setUnitPrice(unitPrice:number):void{
        this.unitPrice=unitPrice
    }
    getTotal():number{
        return this.unitPrice*this.qty
    }
    toString():String{
        return `InvoiceItem[id=${this.id},desc=${this.desc},qty=${this.qty},unitPrice=${this.unitPrice}]`
    }
}
const item=new InvoiceItem("it1","book",2,2000)
console.log(item.toString())