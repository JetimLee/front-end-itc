class Logger {
  constructor(private fileName: string) {}
  writeToFile(): void {
    console.log(`Writing to file`, this.fileName);
  }
}

class Persona {
  constructor(public firstName: string, public lastName: string) {}
  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Employeea extends Persona {
  constructor(firstName: string, lastName: string, private salary: number) {
    super(firstName, lastName);
  }
  saySalary(): void {
    console.log(this.salary);
  }
}
//private - only accessible inside of the class
//protected - same as private, except this can also be accessed in a class that extends the original class

interface Address {
  street: string;
  city: string;
  zipCode: number;
}

interface myEmployee {
  name: string;
  salary: number;
  address: Address;
}
