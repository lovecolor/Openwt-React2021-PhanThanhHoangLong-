var Time = /** @class */ (function () {
    function Time(hour, minute, second) {
        this.hour = hour;
        this.minute = minute;
        this.second = second;
    }
    Time.prototype.getHour = function () {
        return this.hour;
    };
    Time.prototype.getMinute = function () {
        return this.minute;
    };
    Time.prototype.getSecond = function () {
        return this.second;
    };
    Time.prototype.setHour = function (hour) {
        this.hour = hour;
    };
    Time.prototype.setMinute = function (minute) {
        this.minute = minute;
    };
    Time.prototype.setSecond = function (second) {
        this.second = second;
    };
    Time.prototype.toString = function () {
        return "" + (this.hour < 10 ? 0 : "") + this.hour + ":" + (this.minute < 10 ? 0 : "") + this.minute + ":" + (this.second < 10 ? 0 : "") + this.second;
    };
    Time.prototype.nextSecond = function () {
        this.second++;
        if (this.second === 60) {
            this.second = 0;
            this.minute++;
        }
        if (this.minute === 60) {
            this.minute = 0;
            this.hour++;
        }
        if (this.hour === 24) {
            this.hour = 0;
        }
        return this;
    };
    Time.prototype.previousSecond = function () {
        this.second--;
        if (this.second === -1) {
            this.second = 59;
            this.minute--;
        }
        if (this.minute === -1) {
            this.minute = 59;
            this.hour--;
        }
        if (this.hour === -1) {
            this.hour = 23;
        }
        return this;
    };
    return Time;
}());
var time = new Time(23, 59, 59);
console.log(time.nextSecond().toString());
console.log(time.previousSecond().toString());
