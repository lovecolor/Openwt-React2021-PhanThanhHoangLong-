var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.toString = function () {
        return "Circle[radius=" + this.radius + "]";
    };
    Circle.prototype.getArea = function () {
        return Math.pow(this.radius, 2) * Math.PI;
    };
    Circle.prototype.getPerimeter = function () {
        return this.radius * 2 * Math.PI;
    };
    return Circle;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle(width, length) {
        this.width = width;
        this.length = length;
    }
    Rectangle.prototype.toString = function () {
        return "Rectangle[width=" + this.width + ",length=" + this.length + "]";
    };
    Rectangle.prototype.getArea = function () {
        return this.width * this.length;
    };
    Rectangle.prototype.getPerimeter = function () {
        return (this.width + this.length) * 2;
    };
    return Rectangle;
}());
console.log(new Rectangle(1, 2).toString());
