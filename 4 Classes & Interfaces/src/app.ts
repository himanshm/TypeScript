interface Person {
  name: string;
  age: number;

  greet(pharse: string): void;
}

// An interface will be used as a custom type. A interface can't have an initialiser. We can just define the structure, not the concrete values.
let user1: Person;

user1 = {
  name: 'Max',
  age: 30,
  greet(pharse: string) {
    console.log(pharse + ' ' + this.name);
  },
};

// an interface and a custom type are not exactly the same whilst often, you can use them interchangeably and you can use an interface instead of a custom type or the other way around. Well, one major difference is that interfaces can only be used to describe the structure of an object, you can use type for that as well, but instead of a custom type, you can also store other things like union types and so on. When you define something as an interface, it's super clear that you want to define the structure of an object with that. And indeed when it comes to defining object types, you more often see interfaces out there in the wild.

// Interface can be be used as a contract a class can implement and a class then has to adhere to.

interface Named {
  readonly name: string;
}
// A class can have multiple interfaces, and we can also extend multiple

// Inheritance
interface Greetable extends Named {
  greet(pharse: string): void;
}

class Person implements Greetable {
  name: string;
  age = 30;

  constructor(n: string) {
    this.name = n;
  }

  greet(pharse: string) {
    console.log(pharse + ' ' + this.name);
  }
}

let user2: Greetable;
// user2.name = 'Manu'      // Cannot assign to 'name' because it is a read-only property.

user2 = new Person('Max');

user2.greet('Hi there - I am');
console.log(user2);

// If we want to work on an object, we want to use interfaces
// readonly is the only identifier we can use with interface

// Function types with interface=> alternative to custom function type

interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
};

// optional Parameters and properties

interface Named {
  readonly name: string;
  outputName?: string;  // Optional
}
// You can add optional parameters either by providing a default fall back value or by adding a question mark in which case the default value will be undefined.