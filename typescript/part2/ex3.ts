
class Author{
    name:String
    email:String
    
    constructor(name:String,email:String){
        this.name=name;
        this.email=email;
        
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
    
    toString():String{
        return `Author[name=${this.name},email=${this.email}]`
    }

}
class Book{
    isbn:String
    name:String
    author:Author
    price:number
    qty:number
    constructor(isbn:String,name:String,author:Author,price:number,qty:number=0){
        this.name=name
        this.isbn=isbn
        this.author=author
        this.price=price
        this.qty=qty
    }
    getISBN():String{
        return this.isbn
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
        return `Book[isbn=${this.isbn},name=${this.name},${author.toString()},price=${this.price},qty=${this.qty}]`
    }
    getAuthorName():String{
        return author.getName();
    }
    
}
const author=new Author('long',"hoanglong@gmail.com")
console.log(author.toString())
const book=new Book("program language","c++",author,1000,100)
console.log(book.toString())