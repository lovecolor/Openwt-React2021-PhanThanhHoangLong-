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
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.toString = function () {
        return "Animal[name=" + this.name + "]";
    };
    return Animal;
}());
var Mammal = /** @class */ (function (_super) {
    __extends(Mammal, _super);
    function Mammal(name) {
        return _super.call(this, name) || this;
    }
    Mammal.prototype.toString = function () {
        return "Mamal[" + _super.prototype.toString.call(this) + "]";
    };
    return Mammal;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        return _super.call(this, name) || this;
    }
    Cat.prototype.greets = function () {
        console.log("Meow");
    };
    Cat.prototype.toString = function () {
        return "Cat[" + _super.prototype.toString.call(this) + "]";
    };
    return Cat;
}(Mammal));
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.greets = function () {
        console.log("Woof");
    };
    Dog.prototype.toString = function () {
        return "Dog[" + _super.prototype.toString.call(this) + "]";
    };
    return Dog;
}(Mammal));
console.log(new Animal("kiki").toString());
console.log(new Mammal("kiki2").toString());
console.log(new Cat("doraemon").toString());
console.log(new Dog("nasus").toString());
