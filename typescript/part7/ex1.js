var DiscountRate = /** @class */ (function () {
    function DiscountRate() {
        this.serviceDiscountPremium = 0.2;
        this.serviceDiscountGold = 0.15;
        this.serviceDiscountSliver = 0.1;
        this.productDiscountPremium = 0.1;
        this.productDiscountGold = 0.1;
        this.productDiscountSliver = 0.1;
    }
    DiscountRate.prototype.getServiceDiscountRate = function (type) {
        if (type === "premium")
            return this.serviceDiscountPremium;
        if (type === "gold")
            return this.serviceDiscountGold;
        return this.serviceDiscountSliver;
    };
    DiscountRate.prototype.getProductDiscountRate = function (type) {
        if (type === "premium")
            return this.productDiscountPremium;
        if (type === "gold")
            return this.productDiscountGold;
        return this.productDiscountSliver;
    };
    return DiscountRate;
}());
var Customer = /** @class */ (function () {
    function Customer(name) {
        this.member = false;
        this.name = name;
    }
    Customer.prototype.getName = function () {
        return this.name;
    };
    Customer.prototype.isMember = function () {
        return this.member;
    };
    Customer.prototype.setMember = function (member) {
        this.member = member;
    };
    Customer.prototype.getMemberType = function () {
        return this.memberType;
    };
    Customer.prototype.setMemberType = function (type) {
        this.memberType = type;
    };
    Customer.prototype.toString = function () {
        return "Customer[name=" + this.name + ",member=" + this.member + ",type=" + this.memberType + "]";
    };
    return Customer;
}());
var Visit = /** @class */ (function () {
    function Visit(name, date) {
        this.customer = new Customer(name);
        this.date = date;
    }
    Visit.prototype.getName = function () {
        return this.customer.getName();
    };
    Visit.prototype.getServiceExpense = function () {
        return this.servieExpense;
    };
    Visit.prototype.setServiceExpense = function (ex) {
        this.servieExpense = ex;
    };
    Visit.prototype.getProductExpense = function () {
        return this.productExpense;
    };
    Visit.prototype.setProductExpense = function (ex) {
        this.productExpense = ex;
    };
    Visit.prototype.getTotalExpense = function () {
        return this.servieExpense + this.productExpense;
    };
    Visit.prototype.toString = function () {
        return "Visit[" + this.customer.toString() + ",date=" + this.date + ",serviceEx=" + this.servieExpense + ",productEx=" + this.productExpense + "]";
    };
    return Visit;
}());
