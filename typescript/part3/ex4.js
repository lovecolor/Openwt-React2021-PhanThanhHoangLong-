var MyTime = /** @class */ (function () {
    function MyTime(hour, minute, second) {
        if (hour === void 0) { hour = 0; }
        if (minute === void 0) { minute = 0; }
        if (second === void 0) { second = 0; }
        this.hour = hour;
        this.minute = minute;
        this.second = second;
    }
    MyTime.prototype.getHour = function () {
        return this.hour;
    };
    MyTime.prototype.getMinute = function () {
        return this.minute;
    };
    MyTime.prototype.getSecond = function () {
        return this.second;
    };
    MyTime.prototype.setHour = function (hour) {
        this.hour = hour;
    };
    MyTime.prototype.setMinute = function (minute) {
        this.minute = minute;
    };
    MyTime.prototype.setSecond = function (second) {
        this.second = second;
    };
    MyTime.prototype.toString = function () {
        return "" + (this.hour < 10 ? 0 : "") + this.hour + ":" + (this.minute < 10 ? 0 : "") + this.minute + ":" + (this.second < 10 ? 0 : "") + this.second;
    };
    MyTime.prototype.nextSecond = function () {
        this.second++;
        if (this.second === 60) {
            this.second = 0;
            this.minute++;
        }
        if (this.minute === 60) {
            this.minute = 0;
            this.hour++;
        }
        if (this.hour === 24)
            this.hour = 0;
        return this;
    };
    MyTime.prototype.nextMinute = function () {
        this.minute++;
        if (this.minute === 60) {
            this.minute = 0;
            this.hour++;
        }
        if (this.hour === 24)
            this.hour = 0;
        return this;
    };
    MyTime.prototype.nextHour = function () {
        this.hour++;
        if (this.hour === 24)
            this.hour = 0;
        return this;
    };
    MyTime.prototype.previousSecond = function () {
        this.second--;
        if (this.second === -1) {
            this.second = 59;
            this.minute--;
        }
        if (this.minute === -1) {
            this.minute = 59;
            this.hour--;
        }
        if (this.hour === -1)
            this.hour = 23;
        return this;
    };
    MyTime.prototype.previousMinute = function () {
        this.minute--;
        if (this.minute === -1) {
            this.minute = 59;
            this.hour--;
        }
        if (this.hour === -1) {
            this.hour = 23;
        }
        return this;
    };
    MyTime.prototype.previousHour = function () {
        this.hour--;
        if (this.hour === -1)
            this.hour = 23;
        return this;
    };
    return MyTime;
}());
var time = new MyTime(0, 0, 0);
console.log(time.toString());
