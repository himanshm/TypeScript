// Define a class -> object blueprints

abstract class Department {
  static fiscalYear = 2020;
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {}

  static createEmployee(name: string) {
    return { name: name };
  }
  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmplyeeInfo() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, 'IT'); //  calls the constructor of the base class
    this.admins = admins;
  }

  describe() {
    console.log('IT Department - ID', this.id);
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

  describe() {
    console.log('Accounting Department - ID', this.id);
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

const employee1 = Department.createEmployee('Max');
console.log(employee1);

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

// Static methods and properties
//Static properties and methods allow you to add properties and methods to classes which are not accessed on an instance of the class, so where you don't need to call new class name first, but which you access directly on the class. This is often used for utility functions that you want to group or map to a class logically, or global constants which you also wanna store in a class.

// An example built into JavaScript, which is not defined by typescript and not defined by you, but part of JavaScript in the browser is the Math constructor function, or class if you wanna call it like this, that's globally available in JavaScript, where you can access pi as a constant value to give you that pi number, or functions, or methods to be precise, like pow to calculate the power of something. These are methods and properties which you don't access on the instance of Math. You don't have to call new math first. Indeed that won't work, but you access these properties in methods directly on the class itself. So Math acts more like a name space as a grouping mechanism here and that's a common use case for static methods and properties
