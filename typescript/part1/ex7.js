var Dates = /** @class */ (function () {
    function Dates(day, month, year) {
        this.day = day;
        this.month = month;
        this.year = year;
    }
    Dates.prototype.getDay = function () {
        return this.day;
    };
    Dates.prototype.getMonth = function () {
        return this.month;
    };
    Dates.prototype.getYear = function () {
        return this.year;
    };
    Dates.prototype.setDay = function (day) {
        this.day = day;
    };
    Dates.prototype.setMonth = function (month) {
        this.month = month;
    };
    Dates.prototype.setYear = function (year) {
        this.year = year;
    };
    Dates.prototype.toString = function () {
        return "" + (this.day < 10 && 0) + this.day + "/" + (this.month < 10 && 0) + this.month + "/" + this.year;
    };
    return Dates;
}());
var date = new Dates(1, 1, 2000);
console.log(date.toString());
