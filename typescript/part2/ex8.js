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
var MyCircle = /** @class */ (function () {
    function MyCircle(center, radius) {
        if (center === void 0) { center = new MyPoint(0, 0); }
        if (radius === void 0) { radius = 1; }
        this.center = center;
        this.radius = radius;
    }
    MyCircle.prototype.getRadius = function () {
        return this.radius;
    };
    MyCircle.prototype.getCenter = function () {
        return this.center;
    };
    MyCircle.prototype.setRadius = function (radius) {
        this.radius = radius;
    };
    MyCircle.prototype.setCenter = function (center) {
        this.center = center;
    };
    MyCircle.prototype.getCenterX = function () {
        return this.center.getX();
    };
    MyCircle.prototype.getCenterY = function () {
        return this.center.getY();
    };
    MyCircle.prototype.setCenterX = function (x) {
        this.center.setX(x);
    };
    MyCircle.prototype.setCenterY = function (y) {
        this.center.setY(y);
    };
    MyCircle.prototype.getCenterXY = function () {
        return this.center.getXY();
    };
    MyCircle.prototype.setCenterXY = function (x, y) {
        this.center.setXY(x, y);
    };
    MyCircle.prototype.toString = function () {
        return "MyCircle[radius=" + this.radius + ",center=" + this.center.toString() + "]";
    };
    MyCircle.prototype.getArea = function () {
        return this.radius * this.radius * Math.PI;
    };
    MyCircle.prototype.getCircumference = function () {
        return this.radius * 2 * Math.PI;
    };
    MyCircle.prototype.distance = function (another) {
        return this.center.distance(another.getCenter());
    };
    return MyCircle;
}());
var circle = new MyCircle(new MyPoint(0, 0), 3);
console.log(circle.getCenterXY());
console.log(circle.distance(circle));
