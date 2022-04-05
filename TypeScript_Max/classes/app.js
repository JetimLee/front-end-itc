var Department = /** @class */ (function () {
    function Department(name) {
        this.name = name;
        //employees is now only accessible inside of the class
        this.employees = [];
        this.name = name;
    }
    Department.prototype.describe = function () {
        console.log(this.name);
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.showEmployees = function () {
        console.log(this.employees);
    };
    return Department;
}());
var myDepartment = new Department("Gavin");
myDepartment.describe();
myDepartment.addEmployee("Gavin");
myDepartment.addEmployee("John");
myDepartment.showEmployees();
