var Ball = /** @class */ (function () {
    function Ball(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    Ball.prototype.getX = function () {
        return this.x;
    };
    Ball.prototype.getY = function () {
        return this.y;
    };
    Ball.prototype.getZ = function () {
        return this.z;
    };
    Ball.prototype.setXYZ = function (x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    };
    Ball.prototype.toString = function () {
        return "(" + this.x + "," + this.y + "," + this.z + ")";
    };
    return Ball;
}());
var Player = /** @class */ (function () {
    function Player(number, x, y) {
        this.z = 0.0;
        this.number = number;
        this.x = x;
        this.y = y;
    }
    Player.prototype.move = function (xDisp, yDisp) {
        this.x = xDisp;
        this.y = yDisp;
    };
    Player.prototype.jump = function (zDisp) {
        this.z = zDisp;
    };
    Player.prototype.near = function (ball) {
        return Math.sqrt(Math.pow((this.x - ball.getX()), 2) + Math.pow((this.y - ball.getY()), 2) + Math.pow((this.z - ball.getZ()), 2)) == 0;
    };
    Player.prototype.kich = function (ball) {
        ball.setXYZ(ball.getX() + 10, ball.getY() + 10, ball.getZ() + 10);
    };
    return Player;
}());
