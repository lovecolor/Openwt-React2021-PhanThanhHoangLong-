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
        return "Ball[(" + this.x + "," + this.y + "),speed=(" + this.xDelta + "," + this.yDelta + ")]";
    };
    return Ball;
}());
var Container = /** @class */ (function () {
    function Container(x, y, width, height) {
        this.x1 = x;
        this.y1 = y;
        this.x2 = this.x1 + width - 1;
        this.y2 = this.y1 + height - 1;
    }
    Container.prototype.getX = function () {
        return this.x1;
    };
    Container.prototype.getY = function () {
        return this.y1;
    };
    Container.prototype.getWidth = function () {
        return this.x2 - this.x1 + 1;
    };
    Container.prototype.getHeight = function () {
        return this.y2 - this.y1 + 1;
    };
    Container.prototype.collides = function (ball) {
        if (ball.getX() - ball.getRadius() < this.x1 || ball.getX() + ball.getRadius() > this.x2)
            ball.reflectHorizontal();
        if (ball.getY() - ball.getRadius() < this.y1 || ball.getY() + ball.getRadius() > this.y2)
            ball.reflectVertical();
        return true;
    };
    Container.prototype.toString = function () {
        return "Container[(" + this.x1 + "," + this.y1 + "),(" + this.x2 + "," + this.y2 + ")]";
    };
    return Container;
}());
var ball = new Ball(1, 1, 2, 2, 2);
var container = new Container(0, 0, 10, 10);
console.log(container.toString());
for (var i = 0; i < 10; i++) {
    ball.move();
    container.collides(ball);
    console.log(ball.toString());
}
console.log(ball.toString());
