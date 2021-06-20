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
var Person = /** @class */ (function () {
    function Person(name, address) {
        this.name = name;
        this.address = address;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.getAddress = function () {
        return this.address;
    };
    Person.prototype.toString = function () {
        return "Person[name=" + this.name + ",address=" + this.address + "]";
    };
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, address, program, year, fee) {
        var _this = _super.call(this, name, address) || this;
        _this.program = program;
        _this.year = year;
        _this.fee = fee;
        return _this;
    }
    Student.prototype.getProgram = function () {
        return this.program;
    };
    Student.prototype.setProgram = function (program) {
        this.program = program;
    };
    Student.prototype.getYear = function () {
        return this.year;
    };
    Student.prototype.setYear = function (year) {
        this.year = year;
    };
    Student.prototype.getFee = function () {
        return this.fee;
    };
    Student.prototype.setFee = function (fee) {
        this.fee = fee;
    };
    Student.prototype.toString = function () {
        return "Studet[" + _super.prototype.toString.call(this) + "],program=" + this.program + ",year=" + this.year + ",fee=" + this.fee;
    };
    return Student;
}(Person));
var Staff = /** @class */ (function (_super) {
    __extends(Staff, _super);
    function Staff(name, address, school, pay) {
        var _this = _super.call(this, name, address) || this;
        _this.school = school;
        _this.pay = pay;
        return _this;
    }
    Staff.prototype.getSchool = function () {
        return this.school;
    };
    Staff.prototype.setSchool = function (school) {
        this.school = school;
    };
    Staff.prototype.getPay = function () {
        return this.pay;
    };
    Staff.prototype.setPay = function (pay) {
        this.pay = pay;
    };
    Staff.prototype.toString = function () {
        return "Staff[" + _super.prototype.toString.call(this) + ",school=" + this.school + ",pay=" + this.pay + "]";
    };
    return Staff;
}(Person));
console.log(new Student('long', '390/20', 'frontend', 2000, 4).toString());
console.log(new Staff('cong', 'truong nu vuong', 'spdn', 2000).toString());
