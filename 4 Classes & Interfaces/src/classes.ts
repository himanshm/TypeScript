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
  private static instance: AccountingDepartment;
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

  private constructor(id: string, private reports: string[]) {
    super(id, 'Accounting'); //  calls the constructor of the base class
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment('d2', []);
    return this.instance;
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

// const accounting = new AccountingDepartment('d2', []);
const accounting = AccountingDepartment.getInstance()

accounting.mostRecentReport = 'Year End Report';

accounting.addReport('Something went wrong...');

console.log(accounting.mostRecentReport);

accounting.addEmployee('Himanshu');
accounting.addEmployee('Max');

accounting.printReports();

accounting.printEmplyeeInfo();

// There is a pattern in object oriented programming which is called the singleton pattern. The singleton pattern is about ensuring that you always only have exactly one instance of a certain class. This can be useful in scenarios where you somehow can't use static methods or properties or you don't want to, but at the same time you want to make sure that you can't create multiple objects based on a class but that you always have exactly one object based on a class.
