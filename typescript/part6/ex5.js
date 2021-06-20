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
var ResizableCircle = /** @class */ (function (_super) {
    __extends(ResizableCircle, _super);
    function ResizableCircle(radius) {
        return _super.call(this, radius) || this;
    }
    ResizableCircle.prototype.toString = function () {
        return "ResizableCircle[" + _super.prototype.toString.call(this) + "]";
    };
    ResizableCircle.prototype.resize = function (percent) {
        this.radius *= percent / 100.0;
    };
    return ResizableCircle;
}(Circle));
