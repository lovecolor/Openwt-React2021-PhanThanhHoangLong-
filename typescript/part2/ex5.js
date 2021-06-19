var gender;
(function (gender) {
    gender["MALE"] = "m";
    gender["FEMALE"] = "f";
})(gender || (gender = {}));
var Customer = /** @class */ (function () {
    function Customer(id, name, gender) {
        this.id = id;
        this.name = name;
        this.gender = gender;
    }
    Customer.prototype.getID = function () {
        return this.id;
    };
    Customer.prototype.getName = function () {
        return this.name;
    };
    Customer.prototype.getGender = function () {
        return this.gender;
    };
    Customer.prototype.toString = function () {
        return "name(" + this.id + ")";
    };
    return Customer;
}());
var Account = /** @class */ (function () {
    function Account(id, customer, balance) {
        if (balance === void 0) { balance = 0.0; }
        this.id = id;
        this.customer = customer;
        this.balance = balance;
    }
    Account.prototype.getID = function () {
        return this.id;
    };
    Account.prototype.getCustomer = function () {
        return this.customer;
    };
    Account.prototype.getBalance = function () {
        return this.balance;
    };
    Account.prototype.setBalance = function (balance) {
        this.balance = balance;
    };
    Account.prototype.toString = function () {
        return this.customer.toString() + " balance=$" + this.balance.toString().split(".").reduce(function (acc, val) { return acc === "" ? acc + val : acc + "." + val.slice(0, val.length >= 2 ? 2 : val.length); }, "");
    };
    Account.prototype.getCustomerName = function () {
        return this.customer.getName();
    };
    Account.prototype.deposit = function (amount) {
        this.balance += amount;
        return this;
    };
    Account.prototype.widthdraw = function (amount) {
        if (this.balance >= amount)
            this.balance -= amount;
        else {
            console.log("amount withdrawn exceeds the current balance!");
        }
        return this;
    };
    return Account;
}());
console.log(new Account(1, new Customer(1, 'long', gender.MALE), 1.2222).toString());
