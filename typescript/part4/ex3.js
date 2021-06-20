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
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var Point2D = /** @class */ (function () {
    function Point2D(x, y) {
        this.x = 0.0;
        this.y = 0.0;
        this.x = x;
        this.y = y;
    }
    Point2D.prototype.getX = function () {
        return this.x;
    };
    Point2D.prototype.setX = function (x) {
        this.x = x;
    };
    Point2D.prototype.getY = function () {
        return this.y;
    };
    Point2D.prototype.setY = function (y) {
        this.y = y;
    };
    Point2D.prototype.setXY = function (x, y) {
        this.x = x;
        this.y = y;
    };
    Point2D.prototype.getXY = function () {
        return [this.x, this.y];
    };
    Point2D.prototype.toString = function () {
        return "(" + this.x + "," + this.y + ")";
    };
    return Point2D;
}());
var Point3D = /** @class */ (function (_super) {
    __extends(Point3D, _super);
    function Point3D(x, y, z) {
        var _this = _super.call(this, x, y) || this;
        _this.z = 0.0;
        _this.z = z;
        return _this;
    }
    Point3D.prototype.getZ = function () {
        return this.z;
    };
    Point3D.prototype.setZ = function (z) {
        this.z = z;
    };
    Point3D.prototype.setXYZ = function (x, y, z) {
        _super.prototype.setXY.call(this, x, y);
        this.z = z;
    };
    Point3D.prototype.getXYZ = function () {
        return __spreadArray(__spreadArray([], _super.prototype.getXY.call(this)), [this.z]);
    };
    Point3D.prototype.toString = function () {
        return "(" + _super.prototype.getX.call(this) + "," + _super.prototype.getY.call(this) + "," + this.z + ")";
    };
    return Point3D;
}(Point2D));
