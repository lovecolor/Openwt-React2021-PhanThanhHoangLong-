var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var MovablePoint = /** @class */ (function (_super) {
    __extends(MovablePoint, _super);
    function MovablePoint(x, y, xSpeed, ySpeed) {
        var _this = _super.call(this, x, y) || this;
        _this.xSpeed = 0.0;
        _this.ySpeed = 0.0;
        _this.xSpeed = xSpeed;
        _this.ySpeed = ySpeed;
        return _this;
    }
    MovablePoint.prototype.getXSpeed = function () {
        return this.xSpeed;
    };
    MovablePoint.prototype.setXSpeed = function (xSpeed) {
        this.xSpeed = xSpeed;
    };
    MovablePoint.prototype.getYSpeed = function () {
        return this.ySpeed;
    };
    MovablePoint.prototype.setYSpeed = function (ySpeed) {
        this.ySpeed = ySpeed;
    };
    MovablePoint.prototype.setSpeed = function (xSpeed, ySpeed) {
        this.xSpeed = xSpeed;
        this.ySpeed = ySpeed;
    };
    MovablePoint.prototype.getSpeed = function () {
        return [this.xSpeed, this.ySpeed];
    };
    MovablePoint.prototype.toString = function () {
        return _super.prototype.toString.call(this) + ",speed=(" + this.xSpeed + "," + this.ySpeed + ")";
    };
    MovablePoint.prototype.move = function () {
        _super.prototype.setX.call(this, _super.prototype.getX.call(this) + this.xSpeed);
        _super.prototype.setY.call(this, _super.prototype.getY.call(this) + this.ySpeed);
        return this;
    };
    return MovablePoint;
}(Point));
console.log(new MovablePoint(1, 1, 2, 2).move().toString());
