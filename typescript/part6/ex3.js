var MovablePoint = /** @class */ (function () {
    function MovablePoint(x, y, xSpeed, ySpeed) {
        this.x = x;
        this.y = y;
        this.xSpeed = xSpeed;
        this.ySpeed = ySpeed;
    }
    MovablePoint.prototype.toString = function () {
        return "(" + this.x + "," + this.y + ") speed=(" + this.xSpeed + "," + this.ySpeed + ")";
    };
    MovablePoint.prototype.moveUp = function () {
        this.y -= this.ySpeed;
    };
    MovablePoint.prototype.moveDown = function () {
        this.y += this.ySpeed;
    };
    MovablePoint.prototype.moveLeft = function () {
        this.x -= this.xSpeed;
    };
    MovablePoint.prototype.moveRight = function () {
        this.x += this.xSpeed;
    };
    return MovablePoint;
}());
