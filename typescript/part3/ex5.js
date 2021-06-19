var MyDate = /** @class */ (function () {
    function MyDate(year, month, day) {
        this.MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        this.DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        this.DAYS_IN_MONTHS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        this.year = year;
        this.month = month;
        this.day = day;
    }
    MyDate.prototype.isLeapYear = function (year) {
        return (year % 4 === 0 && year % 100 != 0) || year % 400 === 0;
    };
    MyDate.prototype.isValidDate = function (year, month, day) {
        if (year < 1 || year > 9999)
            return false;
        if (month < 1 || month > 12)
            return false;
        var maxDayInCurrentMonth = this.DAYS_IN_MONTHS[month - 1];
        if (month === 2 && this.isLeapYear(year))
            maxDayInCurrentMonth++;
        if (day < 1 || day > maxDayInCurrentMonth)
            return false;
        return true;
    };
    MyDate.prototype.getDayOfWeek = function (year, month, day) {
        var tableCentury = [6, 4, 2, 0];
        var tableMonth = [0, 3, 3, 6, 1, 4, 6, 2, 5, 0, 3, 5];
        var numOfTableMonth = tableMonth[month - 1];
        if (month === 1 && this.isLeapYear(year))
            numOfTableMonth = 6;
        if (month === 2 && this.isLeapYear(year))
            numOfTableMonth = 2;
        return (tableCentury[Math.floor(year / 100) % 4] + year % 100 + Math.floor(year % 100 / 4) + numOfTableMonth + day) % 7;
    };
    MyDate.prototype.setDate = function (year, month, day) {
        this.year = year;
        this.month = month;
        this.day = day;
    };
    MyDate.prototype.getYear = function () {
        return this.year;
    };
    MyDate.prototype.getMonth = function () {
        return this.month;
    };
    MyDate.prototype.getDay = function () {
        return this.day;
    };
    MyDate.prototype.setYear = function (year) {
        this.year = year;
    };
    MyDate.prototype.setMonth = function (month) {
        this.month = month;
    };
    MyDate.prototype.setDay = function (day) {
        this.day = day;
    };
    MyDate.prototype.toString = function () {
        return this.DAYS[this.getDayOfWeek(this.year, this.month, this.day)] + " " + this.day + " " + this.MONTHS[this.month - 1] + " " + this.year;
    };
    MyDate.prototype.nextDay = function () {
        this.day++;
        var maxDayInCurrentMonth = this.DAYS_IN_MONTHS[this.month - 1];
        if (this.month === 2 && this.isLeapYear(this.year))
            maxDayInCurrentMonth++;
        if (this.day > maxDayInCurrentMonth) {
            this.day = 1;
            this.month++;
        }
        if (this.month > 12) {
            this.month = 1;
            this.year++;
        }
        return this;
    };
    MyDate.prototype.nextMonth = function () {
        this.month++;
        if (this.month > 12) {
            this.year++;
            this.month = 1;
        }
        var maxDayInCurrentMonth = this.DAYS_IN_MONTHS[this.month - 1];
        if (this.month === 2 && this.isLeapYear(this.year))
            maxDayInCurrentMonth++;
        if (this.day > maxDayInCurrentMonth) {
            this.day = maxDayInCurrentMonth;
        }
        return this;
    };
    MyDate.prototype.nextYear = function () {
        this.year++;
        if (this.month === 2 && this.isLeapYear(this.year) && this.day === 29)
            this.day--;
        return this;
    };
    MyDate.prototype.previousDay = function () {
        this.day--;
        if (this.day === 0) {
            this.month--;
            if (this.month < 1) {
                this.month = 12;
                this.year--;
            }
            var maxDayInCurrentMonth = this.DAYS_IN_MONTHS[this.month - 1];
            if (this.month === 2 && this.isLeapYear(this.year))
                maxDayInCurrentMonth++;
            this.day = maxDayInCurrentMonth;
        }
        return this;
    };
    MyDate.prototype.previousMonth = function () {
        this.month--;
        if (this.month === 0) {
            this.month = 12;
            this.year--;
            var maxDayInCurrentMonth = this.DAYS_IN_MONTHS[this.month - 1];
            if (this.month === 2 && this.isLeapYear(this.year))
                maxDayInCurrentMonth++;
            if (this.day > maxDayInCurrentMonth)
                this.day = maxDayInCurrentMonth;
        }
        return this;
    };
    MyDate.prototype.previousYear = function () {
        this.year--;
        var maxDayInCurrentMonth = this.DAYS_IN_MONTHS[this.month - 1];
        if (this.month === 2 && this.isLeapYear(this.year))
            maxDayInCurrentMonth++;
        if (this.day > maxDayInCurrentMonth)
            this.day = maxDayInCurrentMonth;
        return this;
    };
    return MyDate;
}());
var date = new MyDate(2012, 2, 17);
console.log(date.toString());
