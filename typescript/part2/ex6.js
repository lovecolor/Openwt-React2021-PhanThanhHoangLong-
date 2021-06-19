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
var point = new MyPoint(0, 0);
console.log(point.distance(new MyPoint(3, 4)));
