var Ball = /** @class */ (function () {
    function Ball(x, y, radius, xDelta, yDelta) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.xDelta = xDelta;
        this.yDelta = yDelta;
    }
    Ball.prototype.getX = function () {
        return this.x;
    };
    Ball.prototype.getY = function () {
        return this.y;
    };
    Ball.prototype.setX = function (x) {
        this.x = x;
    };
    Ball.prototype.setY = function (y) {
        this.y = y;
    };
    Ball.prototype.getRadius = function () {
        return this.radius;
    };
    Ball.prototype.setRadius = function (radius) {
        this.radius = radius;
    };
    Ball.prototype.getXDelta = function () {
        return this.xDelta;
    };
    Ball.prototype.getYDelta = function () {
        return this.yDelta;
    };
    Ball.prototype.setXDelta = function (xDelta) {
        this.xDelta = xDelta;
    };
    Ball.prototype.setYDelta = function (yDelta) {
        this.yDelta = this.yDelta;
    };
    Ball.prototype.move = function () {
        this.x += this.xDelta;
        this.y += this.yDelta;
    };
    Ball.prototype.reflectHorizontal = function () {
        this.xDelta = -this.xDelta;
    };
    Ball.prototype.reflectVertical = function () {
        this.yDelta = -this.yDelta;
    };
    Ball.prototype.toString = function () {
        return "Ball[(" + this.x + "," + this.y + "),spedd=(" + this.xDelta + "," + this.yDelta + ")]";
    };
    return Ball;
}());
var ball = new Ball(1, 1, 2, 2, 2);
ball.move();
console.log(ball.toString());
