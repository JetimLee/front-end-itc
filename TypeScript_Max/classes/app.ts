class Department {
  //employees is now only accessible inside of the class
  private employees: string[] = [];
  constructor(private name: string) {
    this.name = name;
  }
  describe() {
    console.log(this.name);
  }
  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  showEmployees() {
    console.log(this.employees);
  }
}
class ITDepartment extends Department {
  constructor(name: string) {
    super(name);
  }
}
let myDepartment = new Department("Gavin");
const myIT = new ITDepartment("Gavin");
myDepartment.describe();
myDepartment.addEmployee("Gavin");
myDepartment.addEmployee("John");
myDepartment.showEmployees();
myIT.describe();
