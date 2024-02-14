// Define a class -> object blueprints

class Department {
  //   private id: string;
  //   private name: string;
  private employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // this.name = n;
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmplyeeInfo() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

// Inheritance => the class which inherits automatically gets everything the base class, Department in this case, has
// As long as we don't add a dedicated constructor for this inherited class, for this subclass, the base class' constructor is automatically used when we instantiate our subclass
class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, 'IT'); //  calls the constructor of the base class
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting'); //  calls the constructor of the base class
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports);
  }
}

const it = new ITDepartment('d1', ['Himanshu']);

it.addEmployee('Max');
it.addEmployee('Manu');

console.log(it);

it.describe();
it.printEmplyeeInfo();
// RULE OF THUMB: this refers to the thing which is responsible for calling the method
