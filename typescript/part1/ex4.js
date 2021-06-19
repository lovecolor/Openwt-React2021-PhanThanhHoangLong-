var Employee = /** @class */ (function () {
    function Employee(id, firstName, lastName, salary) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
    Employee.prototype.getID = function () {
        return this.id;
    };
    Employee.prototype.getFistName = function () {
        return this.firstName;
    };
    Employee.prototype.getLastName = function () {
        return this.lastName;
    };
    Employee.prototype.getName = function () {
        return this.firstName + " " + this.lastName;
    };
    Employee.prototype.getSalary = function () {
        return this.salary;
    };
    Employee.prototype.setSalary = function (salary) {
        this.salary = salary;
    };
    Employee.prototype.getAnnualSalary = function () {
        return this.salary * 12;
    };
    Employee.prototype.raiseSalary = function (percent) {
        return this.salary + this.salary * percent / 100;
    };
    Employee.prototype.toString = function () {
        return "Employee[id=" + this.id + ",name=" + this.getName() + ",salary=" + this.salary + "]";
    };
    return Employee;
}());
var employee = new Employee(1, "hoang", "long", 1000);
console.log(employee.raiseSalary(20));
