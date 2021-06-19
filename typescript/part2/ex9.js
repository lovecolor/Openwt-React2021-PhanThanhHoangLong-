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
var MyTriangle = /** @class */ (function () {
    function MyTriangle(v1, v2, v3) {
        this.v1 = v1;
        this.v2 = v2;
        this.v3 = v3;
    }
    MyTriangle.prototype.toString = function () {
        return "MyTriangle[v1=" + this.v1.toString() + ",v2=" + this.v2.toString() + ",v3=" + this.v3.toString() + "]";
    };
    MyTriangle.prototype.getPerimeter = function () {
        return this.v1.distance(this.v2) + this.v2.distance(this.v3) + this.v3.distance(this.v1);
    };
    MyTriangle.prototype.getType = function () {
        var width1 = this.v1.distance(this.v2), width2 = this.v2.distance(this.v3), width3 = this.v1.distance(this.v3);
        if (width1 != width2 && width2 != width3 && width3 != width1)
            return "Scalene";
        if (width1 === width2 && width2 === width3)
            return "Equilateral";
        return "isosceles";
    };
    return MyTriangle;
}());
console.log(new MyTriangle(new MyPoint(0, 0), new MyPoint(0, 3), new MyPoint(4, 0)).getType());
console.log(new MyTriangle(new MyPoint(0, 0), new MyPoint(0, 3), new MyPoint(3, 0)).getType());
