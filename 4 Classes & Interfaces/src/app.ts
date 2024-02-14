// Define a class -> object blueprints

class Department {
  //   private id: string;
  //   private name: string;
  protected employees: string[] = [];

  // Private properties are really only accessible from inside the class in which they're defined, not classes that inherit from that class. So, employees is available inside of the department, but not in classes based on department. So, accounting department doesn't have direct access to the employees properties. If we want to grant that access, and still make sure that it's not a property that can be changed from outside, we can switch it to protected. Protected is like private, but unlike private, it's now not just available in this class, but also in any class that extends this class.

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
  private lastReport: string;

  // A getter is a property where we execute a function or method, when we retrieve a value and that allows us as developers to add more complex logic. Helps us controlling the access of a property

  get mostRecentReport() {
    // a getter method has to return something
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error('No report found!');
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error('Pass in a valid value');
    }
    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting'); //  calls the constructor of the base class
    this.lastReport = reports[0];
  }
  // override methods of the base class
  addEmployee(name: string): void {
    if (name === 'Himanshu') {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
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

const accounting = new AccountingDepartment('d2', []);

// Getter and setter are accessed as a property and not executed as a method
// console.log(accounting.mostRecentReport);

// accounting.mostRecentReport = ''

accounting.mostRecentReport = 'Year End Report';

accounting.addReport('Something went wrong...');

console.log(accounting.mostRecentReport);

accounting.addEmployee('Himanshu');
accounting.addEmployee('Max');

accounting.printReports();

accounting.printEmplyeeInfo();
