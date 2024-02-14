// Define a class -> object blueprints

class Department {
  //   private id: string;
  //   private name: string;
  private employees: string[] = []; // Make this array accessible only from inside the class public modifier is default
  // Private and public however aren't known to JavaScript, but only to typescript

  // Besides properties, we can also mark methods as private

  // Functions in objects are simply called methods
  // Constructor is essentially a function tied to this class and tied to any object we create based on the class which is executed when the object is being created. This allows us to do some initiallisation work for the object being built.

  constructor(private id: string, public name: string) {
    // this.name = n;
  }

  describe(this: Department) {
    // When describe() is executed, `this` inside of the describe should always refer to an instance that's based on the Department class so an object that would be of type Department
    console.log(`Department (${this.id}): ${this.name}`);
    // this refers to the concrete instance of this Department class that was created and with dot(.) notation we can access all the properties and methods of this instance
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmplyeeInfo() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department('d1', 'Accounting');

accounting.addEmployee('Max');
accounting.addEmployee('Manu');
// accounting.employees[2] = 'Anna'; // Property 'employees' is private and only accessible within class 'Department'.

console.log(accounting);

accounting.describe();
accounting.printEmplyeeInfo();
// RULE OF THUMB: this refers to the thing which is responsible for calling the method

// const accountingCopy = { name: 's', describe: accounting.describe };

// accountingCopy.describe();
