var MyComplex = /** @class */ (function () {
    function MyComplex(real, imag) {
        if (real === void 0) { real = 0.0; }
        if (imag === void 0) { imag = 0.0; }
        this.real = real;
        this.imag = imag;
    }
    MyComplex.prototype.getReal = function () {
        return this.real;
    };
    MyComplex.prototype.setReal = function (real) {
        this.real = real;
    };
    MyComplex.prototype.getImag = function () {
        return this.imag;
    };
    MyComplex.prototype.setImag = function (imag) {
        this.imag = imag;
    };
    MyComplex.prototype.setValue = function (real, imag) {
        this.real = real;
        this.imag = imag;
    };
    MyComplex.prototype.toString = function () {
        return "\"real+imagi\", e.g., \"" + this.real + "+" + this.imag + "+i\"";
    };
    MyComplex.prototype.isReal = function () {
        return this.imag === 0;
    };
    MyComplex.prototype.isImaginary = function () {
        return this.real === 0;
    };
    MyComplex.prototype.equals = function (another) {
        return this.real === another.real && this.imag === another.imag;
    };
    MyComplex.prototype.magnitude = function () {
        return Math.sqrt(this.real * this.real + this.imag * this.imag);
    };
    MyComplex.prototype.addInto = function (right) {
        this.real += right.real;
        this.imag += right.imag;
        return this;
    };
    MyComplex.prototype.addNew = function (right) {
        return new MyComplex(this.real + right.real, this.imag + right.imag);
    };
    return MyComplex;
}());
var complex = new MyComplex(1, 0);
console.log(complex.toString());
