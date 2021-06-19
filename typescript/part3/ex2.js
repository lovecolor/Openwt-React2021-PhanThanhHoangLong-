var MyPolynomial = /** @class */ (function () {
    function MyPolynomial(coeffs) {
        this.coeffs = coeffs;
    }
    MyPolynomial.prototype.getDegree = function () {
        return this.coeffs.length - 1;
    };
    MyPolynomial.prototype.toString = function () {
        var _this = this;
        return this.coeffs.map(function (e, i) { return "" + (e > 0 ? "" + e + (i < _this.coeffs.length - 1 ? "x^" + (_this.coeffs.length - 1 - i) : "") : ""); }).filter(function (e) { return e != ""; }).join("+");
    };
    MyPolynomial.prototype.evaluate = function (x) {
        var _this = this;
        return this.coeffs.reduce(function (acc, val, i) { return acc + val * (Math.pow(x, _this.coeffs.length) - 1 - i); }, 0);
    };
    MyPolynomial.prototype.add = function (right) {
        var coeffHigh = this.coeffs.length >= right.coeffs.length ? this.coeffs : right.coeffs;
        var coeffLow = this.coeffs.length < right.coeffs.length ? this.coeffs : right.coeffs;
        var rs = coeffHigh.map(function (val, i) {
            return i < coeffHigh.length - coeffLow.length ? val : val + coeffLow[i - coeffHigh.length + coeffLow.length];
        });
        return new MyPolynomial(rs);
    };
    ;
    MyPolynomial.prototype.multiply = function (right) {
        var _this = this;
        var newCoeff = [];
        for (var i = 0; i < (this.coeffs.length - 1) + (right.coeffs.length - 1) + 1; i++) {
            newCoeff.push(0);
        }
        this.coeffs.map(function (e, i) {
            right.coeffs.map(function (val, j) {
                newCoeff[newCoeff.length - 1 - (_this.coeffs.length - 1 - i) - (right.coeffs.length - 1 - j)] += e * val;
            });
        });
        return new MyPolynomial(newCoeff);
    };
    return MyPolynomial;
}());
var coeff = new MyPolynomial([1, 0, 3, 4]);
console.log(coeff.toString());
console.log(coeff.add(new MyPolynomial([1, 2, 0, 4, 5])).toString());
console.log(coeff.multiply(new MyPolynomial([1])).toString());
