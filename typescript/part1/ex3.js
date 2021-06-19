var Rectangle = /** @class */ (function () {
    function Rectangle(length, width) {
        this.length = 1.0;
        this.width = 1.0;
        this.length = length;
        this.width = width;
    }
    Rectangle.prototype.getLength = function () {
        return length;
    };
    Rectangle.prototype.getWidth = function () {
        return this.width;
    };
    Rectangle.prototype.setLength = function (length) {
        this.length = length;
    };
    Rectangle.prototype.setWidth = function (width) {
        this.width = width;
    };
    Rectangle.prototype.getArea = function () {
        return length * this.width;
    };
    Rectangle.prototype.getPerimeter = function () {
        return (length + this.width) * 2;
    };
    Rectangle.prototype.toString = function () {
        return "Rectangle[length=" + this.length + ",width=" + this.width + "]";
    };
    return Rectangle;
}());
var rectangle = new Rectangle(1, 1);
console.log(rectangle.toString());
