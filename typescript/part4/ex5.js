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
var Shape = /** @class */ (function () {
    function Shape(color, filled) {
        this.color = "red";
        this.filled = true;
        this.color = color;
        this.filled = filled;
    }
    Shape.prototype.getColor = function () {
        return this.color;
    };
    Shape.prototype.setColor = function (color) {
        this.color = color;
    };
    Shape.prototype.isFilled = function () {
        return this.filled;
    };
    Shape.prototype.setFilled = function (filled) {
        this.filled = filled;
    };
    Shape.prototype.toString = function () {
        return "Shape[color=" + this.color + ",filled=" + this.filled + "]";
    };
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(radius, color, filled) {
        var _this = _super.call(this, color, filled) || this;
        _this.radius = 1.0;
        _this.radius = radius;
        return _this;
    }
    Circle.prototype.getRadius = function () {
        return this.radius;
    };
    Circle.prototype.setRadius = function (radius) {
        this.radius = radius;
    };
    Circle.prototype.getArea = function () {
        return Math.pow(this.radius, 2) * Math.PI;
    };
    Circle.prototype.getPerimeter = function () {
        return this.radius * 2 * Math.PI;
    };
    Circle.prototype.toString = function () {
        return "Circle[" + _super.prototype.toString.call(this) + ",radius=" + this.radius + "]";
    };
    return Circle;
}(Shape));
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(width, length, color, filled) {
        var _this = _super.call(this, color, filled) || this;
        _this.width = 1.0;
        _this.length = 1.0;
        _this.width = width;
        _this.length = length;
        return _this;
    }
    Rectangle.prototype.getWidth = function () {
        return this.width;
    };
    Rectangle.prototype.setWidth = function (width) {
        this.width = width;
    };
    Rectangle.prototype.getLength = function () {
        return this.length;
    };
    Rectangle.prototype.setLength = function (length) {
        this.length = length;
    };
    Rectangle.prototype.getArea = function () {
        return this.width * this.length;
    };
    Rectangle.prototype.getPerimeter = function () {
        return (this.width + this.length) * 2;
    };
    Rectangle.prototype.toString = function () {
        return "Rectangle[" + _super.prototype.toString.call(this) + ",width=" + this.width + ",length=" + this.length + "]";
    };
    return Rectangle;
}(Shape));
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(side, color, filled) {
        return _super.call(this, side, side, color, filled) || this;
    }
    Square.prototype.getSide = function () {
        return _super.prototype.getWidth.call(this);
    };
    Square.prototype.setSide = function (side) {
        _super.prototype.setWidth.call(this, side);
        _super.prototype.setLength.call(this, side);
    };
    Square.prototype.setWidth = function (side) {
        _super.prototype.setWidth.call(this, side);
        _super.prototype.setLength.call(this, side);
    };
    Square.prototype.setLength = function (side) {
        _super.prototype.setWidth.call(this, side);
        _super.prototype.setLength.call(this, side);
    };
    Square.prototype.toString = function () {
        return "Square[" + _super.prototype.toString.call(this) + "]";
    };
    return Square;
}(Rectangle));
console.log(new Square(5, 'red', true).toString());
