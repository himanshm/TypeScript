// Define a class -> object blueprints

class Department {
  name: string;

  // Functions in objects are simply called methods
  // Constructor is essentially a function tied to this class and tied to any object we create based on the class which is executed when the object is being created. This allows us to do some initiallisation work for the object being built.

  constructor(n: string) {
    this.name = n;
  }

  describe(this: Department) {
    // When describe() is executed, `this` inside of the describe should always refer to an instance that's based on the Department class so an object that would be of type Department
    console.log('Department: ' + this.name);
    // this refers to the concrete instance of this Department class that was created and with dot(.) notation we can access all the properties and methods of this instance
  }
}

const accounting = new Department('Accounting');

console.log(accounting);

accounting.describe();
// RULE OF THUMB: this refers to the thing which is responsible for calling the method

const accountingCopy = { name: 's', describe: accounting.describe };

accountingCopy.describe();
