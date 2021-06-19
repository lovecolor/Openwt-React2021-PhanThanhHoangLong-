var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = 1.0;
        this.radius = radius;
    }
    Circle.prototype.getRadius = function () {
        return this.radius;
    };
    Circle.prototype.setRadius = function (radius) {
        this.radius = radius;
    };
    Circle.prototype.getArea = function () {
        return this.radius * this.radius * Math.PI;
    };
    Circle.prototype.getCircumference = function () {
        return this.radius * 2 * Math.PI;
    };
    Circle.prototype.toString = function () {
        return "Circle[radius=" + this.radius + "]";
    };
    return Circle;
}());
var circle = new Circle(5);
console.log(circle.toString());
