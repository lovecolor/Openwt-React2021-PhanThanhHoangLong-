var MyPoint = /** @class */ (function () {
    function MyPoint(x, y) {
        this.x = x;
        this.y = y;
    }
    MyPoint.prototype.getX = function () {
        return this.x;
    };
    MyPoint.prototype.getY = function () {
        return this.y;
    };
    MyPoint.prototype.setX = function (x) {
        this.x = x;
    };
    MyPoint.prototype.setY = function (y) {
        this.y = y;
    };
    MyPoint.prototype.getXY = function () {
        return [this.x, this.y];
    };
    MyPoint.prototype.setXY = function (x, y) {
        this.x = x;
        this.y = y;
    };
    MyPoint.prototype.toString = function () {
        return "(" + this.x + "," + this.y + ")";
    };
    MyPoint.prototype.distance = function (another) {
        return Math.sqrt((another.getX() - this.x) * (another.getX() - this.x) + (another.getY() - this.y) * (another.getY() - this.y));
    };
    return MyPoint;
}());
var MyLine = /** @class */ (function () {
    function MyLine(begin, end) {
        this.begin = begin;
        this.end = end;
    }
    MyLine.prototype.getBegin = function () {
        return this.begin;
    };
    MyLine.prototype.setBegin = function (begin) {
        this.begin = begin;
    };
    MyLine.prototype.getEnd = function () {
        return this.end;
    };
    MyLine.prototype.setEnd = function (end) {
        this.end = end;
    };
    MyLine.prototype.getBeginX = function () {
        return this.begin.getX();
    };
    MyLine.prototype.setBeginX = function (x) {
        this.begin.setX(x);
    };
    MyLine.prototype.getBeginY = function () {
        return this.begin.getY();
    };
    MyLine.prototype.setBeginY = function (y) {
        this.begin.setY(y);
    };
    MyLine.prototype.getEndX = function () {
        return this.end.getX();
    };
    MyLine.prototype.setEndX = function (x) {
        this.end.setX(x);
    };
    MyLine.prototype.getEndY = function () {
        return this.end.getY();
    };
    MyLine.prototype.setEndY = function (y) {
        this.end.setY(y);
    };
    MyLine.prototype.getBeginXY = function () {
        return this.begin.getXY();
    };
    MyLine.prototype.setBeginXY = function (x, y) {
        this.begin.setXY(x, y);
    };
    MyLine.prototype.getEndXY = function () {
        return this.end.getXY();
    };
    MyLine.prototype.setEndXY = function (x, y) {
        this.end.setXY(x, y);
    };
    MyLine.prototype.getLength = function () {
        return this.begin.distance(this.end);
    };
    MyLine.prototype.getGradient = function () {
        return Math.atan2((Math.abs(this.begin.getY() - this.end.getY())), Math.abs(this.begin.getX() - this.end.getX()));
    };
    MyLine.prototype.toString = function () {
        return "MyLine[begin=" + this.begin.toString() + ",end=" + this.end.toString() + "]";
    };
    return MyLine;
}());
console.log(new MyLine(new MyPoint(0, 0), new MyPoint(3, 4)).getGradient());
