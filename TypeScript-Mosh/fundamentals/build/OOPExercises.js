"use strict";
class Logger {
    constructor(fileName) {
        this.fileName = fileName;
    }
    writeToFile() {
        console.log(`Writing to file`, this.fileName);
    }
}
class Persona {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
class Employeea extends Persona {
    constructor(firstName, lastName, salary) {
        super(firstName, lastName);
        this.salary = salary;
    }
    saySalary() {
        console.log(this.salary);
    }
}
//# sourceMappingURL=OOPExercises.js.map