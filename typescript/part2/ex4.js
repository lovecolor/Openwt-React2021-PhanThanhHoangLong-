var Customer = /** @class */ (function () {
    function Customer(id, name, discount) {
        this.id = id;
        this.name = name;
        this.discount = discount;
    }
    Customer.prototype.getID = function () {
        return this.id;
    };
    Customer.prototype.getName = function () {
        return this.name;
    };
    Customer.prototype.getDiscount = function () {
        return this.discount;
    };
    Customer.prototype.setDiscount = function (discount) {
        this.discount = discount;
    };
    Customer.prototype.toString = function () {
        return "name(" + this.id + ")(" + this.discount + "%)";
    };
    return Customer;
}());
var Invoice = /** @class */ (function () {
    function Invoice(id, customer, amount) {
        this.id = id;
        this.customer = customer;
        this.amount = amount;
    }
    Invoice.prototype.getID = function () {
        return this.id;
    };
    Invoice.prototype.getCustomer = function () {
        return this.customer;
    };
    Invoice.prototype.setCustomer = function (customer) {
        this.customer = customer;
    };
    Invoice.prototype.getAmount = function () {
        return this.amount;
    };
    Invoice.prototype.setAmount = function (amount) {
        this.amount = amount;
    };
    Invoice.prototype.getCustomerID = function () {
        return this.customer.getID();
    };
    Invoice.prototype.getCustomerName = function () {
        return this.customer.getName();
    };
    Invoice.prototype.getCustomerDiscount = function () {
        return this.customer.getDiscount();
    };
    Invoice.prototype.getAmountAfterDiscount = function () {
        return this.amount * (100 - this.customer.getDiscount()) / 100;
    };
    Invoice.prototype.toString = function () {
        return "Invoice[id=" + this.id + ",customer=" + this.customer.toString() + ",amount=" + this.amount + "]";
    };
    return Invoice;
}());
var item = new Invoice(1, new Customer(1, "long", 20), 1000);
console.log(item.toString());
console.log(item.getAmountAfterDiscount());
