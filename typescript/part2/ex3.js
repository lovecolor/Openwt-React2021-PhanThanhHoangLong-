var Author = /** @class */ (function () {
    function Author(name, email) {
        this.name = name;
        this.email = email;
    }
    Author.prototype.getName = function () {
        return this.name;
    };
    Author.prototype.getEmail = function () {
        return this.email;
    };
    Author.prototype.setEmail = function (email) {
        this.email = email;
    };
    Author.prototype.toString = function () {
        return "Author[name=" + this.name + ",email=" + this.email + "]";
    };
    return Author;
}());
var Book = /** @class */ (function () {
    function Book(isbn, name, author, price, qty) {
        if (qty === void 0) { qty = 0; }
        this.name = name;
        this.isbn = isbn;
        this.author = author;
        this.price = price;
        this.qty = qty;
    }
    Book.prototype.getISBN = function () {
        return this.isbn;
    };
    Book.prototype.getName = function () {
        return this.name;
    };
    Book.prototype.getAuthor = function () {
        return author;
    };
    Book.prototype.getPrice = function () {
        return this.price;
    };
    Book.prototype.setPrice = function (price) {
        this.price = price;
    };
    Book.prototype.getQty = function () {
        return this.qty;
    };
    Book.prototype.setQty = function (qty) {
        this.qty = qty;
    };
    Book.prototype.toString = function () {
        return "Book[isbn=" + this.isbn + ",name=" + this.name + "," + author.toString() + ",price=" + this.price + ",qty=" + this.qty + "]";
    };
    Book.prototype.getAuthorName = function () {
        return author.getName();
    };
    return Book;
}());
var author = new Author('long', "hoanglong@gmail.com");
console.log(author.toString());
var book = new Book("program language", "c++", author, 1000, 100);
console.log(book.toString());
