enum gender{
    MALE='m',
    FEMALE='f'}
class Author{
    name:String
    email:String
    gender:gender
    constructor(name:String,email:String,gender:gender){
        this.name=name;
        this.email=email;
        this.gender=gender
    }
    getName():String{
        return this.name
    }
    getEmail():String{
        return this.email
    }
    setEmail(email:String):void{
        this.email=email
    }
    getGender():gender{
        return this.gender
    }
    toString():String{
        return `Author[name=${this.name},email=${this.email},gender=${this.gender}]`
    }

}
class Book{
    name:String
    author:Author
    price:number
    qty:number
    constructor(name:String,author:Author,price:number,qty:number=0){
        this.name=name
        this.author=author
        this.price=price
        this.qty=qty
    }
    getName():String{
        return this.name
    }
    getAuthor():Author{
        return author
    }
    getPrice():number{
        return this.price
    }
    setPrice(price:number):void{
        this.price=price
    }
    getQty():number{
        return this.qty
    }
    setQty(qty:number):void{
        this.qty=qty
    }
    toString():String{
        return `Book[name=${this.name},${author.toString()},price=${this.price},qty=${this.qty}]`
    }
}
const author=new Author('long',"hoanglong@gmail.com",gender.MALE)
console.log(author.toString())
const book=new Book("c++",author,1000,100)
console.log(book.toString())