var gender;
(function (gender) {
    gender["MALE"] = "m";
    gender["FEMALE"] = "f";
})(gender || (gender = {}));
var Author = /** @class */ (function () {
    function Author(name, email, gender) {
        this.name = name;
        this.email = email;
        this.gender = gender;
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
    Author.prototype.getGender = function () {
        return this.gender;
    };
    Author.prototype.toString = function () {
        return "Author[name=" + this.name + ",email=" + this.email + ",gender=" + this.gender + "]";
    };
    return Author;
}());
var Book = /** @class */ (function () {
    function Book(name, author, price, qty) {
        if (qty === void 0) { qty = 0; }
        this.name = name;
        this.author = author;
        this.price = price;
        this.qty = qty;
    }
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
        return "Book[name=" + this.name + "," + author.toString() + ",price=" + this.price + ",qty=" + this.qty + "]";
    };
    return Book;
}());
var author = new Author('long', "hoanglong@gmail.com", gender.MALE);
console.log(author.toString());
var book = new Book("c++", author, 1000, 100);
console.log(book.toString());
