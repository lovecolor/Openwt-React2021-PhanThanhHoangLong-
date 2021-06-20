var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = 0.0;
        this.y = 0.0;
        this.x = x;
        this.y = y;
    }
    Point.prototype.getX = function () {
        return this.x;
    };
    Point.prototype.setX = function (x) {
        this.x = x;
    };
    Point.prototype.getY = function () {
        return this.y;
    };
    Point.prototype.setY = function (y) {
        this.y = y;
    };
    Point.prototype.setXY = function (x, y) {
        this.x = x;
        this.y = y;
    };
    Point.prototype.getXY = function () {
        return [this.x, this.y];
    };
    Point.prototype.toString = function () {
        return "(" + this.x + "," + this.y + ")";
    };
    return Point;
}());
var PolyLine = /** @class */ (function () {
    function PolyLine(points) {
        this.points = [];
        this.points = points;
    }
    PolyLine.prototype.appendPoint = function (point) {
        this.points.push(point);
    };
    PolyLine.prototype.toString = function () {
        return "{" + this.points.map(function (e) { return e.toString(); }).join(",") + "}";
    };
    PolyLine.prototype.getLength = function () {
        var _this = this;
        return this.points.reduce(function (acc, val, i) { return i < _this.points.length - 1 ? acc + Math.sqrt(Math.pow((val.getX() - _this.points[i + 1].getX()), 2) + Math.pow((val.getY() - _this.points[i + 1].getY()), 2)) : acc; }, 0);
    };
    return PolyLine;
}());
var polyline = new PolyLine([new Point(0, 0), new Point(3, 4), new Point(0, 0)]);
console.log(polyline.toString());
console.log(polyline.getLength());
