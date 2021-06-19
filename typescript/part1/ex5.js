var InvoiceItem = /** @class */ (function () {
    function InvoiceItem(id, desc, qty, unitPrice) {
        this.id = id;
        this.desc = desc;
        this.qty = qty;
        this.unitPrice = unitPrice;
    }
    InvoiceItem.prototype.getID = function () {
        return this.id;
    };
    InvoiceItem.prototype.getDesc = function () {
        return this.desc;
    };
    InvoiceItem.prototype.getQty = function () {
        return this.qty;
    };
    InvoiceItem.prototype.setQty = function (qty) {
        this.qty = qty;
    };
    InvoiceItem.prototype.getUnitPrice = function () {
        return this.unitPrice;
    };
    InvoiceItem.prototype.setUnitPrice = function (unitPrice) {
        this.unitPrice = unitPrice;
    };
    InvoiceItem.prototype.getTotal = function () {
        return this.unitPrice * this.qty;
    };
    InvoiceItem.prototype.toString = function () {
        return "InvoiceItem[id=" + this.id + ",desc=" + this.desc + ",qty=" + this.qty + ",unitPrice=" + this.unitPrice + "]";
    };
    return InvoiceItem;
}());
var item = new InvoiceItem("it1", "book", 2, 2000);
console.log(item.toString());
