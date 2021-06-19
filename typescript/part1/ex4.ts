class Employee {
    id: number
    firstName: String
    lastName: String
    salary: number
    constructor(id: number, firstName: string, lastName: string, salary: number) {
        this.id = id
        this.firstName = firstName
        this.lastName = lastName
        this.salary = salary
    }
    getID(): number {
        return this.id
    }
    getFistName(): String {
        return this.firstName
    }
    getLastName(): String {
        return this.lastName
    }
    getName(): String {
        return `${this.firstName} ${this.lastName}`
    }
    getSalary(): number {
        return this.salary
    }
    setSalary(salary: number): void {
        this.salary = salary
    }
    getAnnualSalary(): number {
        return this.salary * 12
    }
    raiseSalary(percent:number):number{
        return this.salary+this.salary*percent/100
    }
    toString():String{
        return `Employee[id=${this.id},name=${this.getName()},salary=${this.salary}]`
    }
}
const employee=new Employee(1,"hoang","long",1000)
console.log(employee.raiseSalary(20))