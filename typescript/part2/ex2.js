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
    function Book(name, authors, price, qty) {
        if (qty === void 0) { qty = 0; }
        this.name = name;
        this.authors = authors;
        this.price = price;
        this.qty = qty;
    }
    Book.prototype.getName = function () {
        return this.name;
    };
    Book.prototype.getAuthors = function () {
        return this.authors;
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
        return "Book[name=" + this.name + ",authors={" + this.authors.map(function (e) { return e.toString(); }) + "},price=" + this.price + ",qty=" + this.qty + "]";
    };
    Book.prototype.getAuthorNames = function () {
        var _this = this;
        return this.authors.reduce(function (acc, val, i) { return i < _this.authors.length - 1 ? acc + val.getName() + " ," : acc + val.getName(); }, "");
    };
    return Book;
}());
var author = new Author('long', "hoanglong@gmail.com", gender.MALE);
console.log(author.toString());
var book = new Book("c++", [author, author], 1000, 100);
console.log(book.toString());
console.log(book.getAuthorNames());
