var Account = /** @class */ (function () {
    function Account(id, name, balance) {
        if (balance === void 0) { balance = 0; }
        this.id = id;
        this.name = name;
        this.balance = balance;
    }
    Account.prototype.getID = function () {
        return this.id;
    };
    Account.prototype.getName = function () {
        return this.name;
    };
    Account.prototype.getBalance = function () {
        return this.balance;
    };
    Account.prototype.credit = function (amount) {
        return this.balance += amount;
    };
    Account.prototype.debit = function (amount) {
        if (amount <= this.balance)
            this.balance -= amount;
        else {
            console.log("Amount exceeded balance");
        }
        return this.balance;
    };
    Account.prototype.transferTo = function (another, amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            another.credit(amount);
        }
        else {
            console.log("Amount exceeded balance");
        }
        return this.balance;
    };
    Account.prototype.toString = function () {
        return "Acount[id=" + this.id + ",name=" + this.name + ",balance=" + this.balance + "]";
    };
    return Account;
}());
var account1 = new Account('ac1', 'long', 1000);
var account2 = new Account('ac2', 'hoang', 2000);
account1.transferTo(account2, 1000);
console.log(account2.toString());
console.log(account1.toString());
const account=new Account('ac3','asd')
console.log(account.toString())