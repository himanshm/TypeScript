// Intersection Types

type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: 'Max',
  privileges: ['create-server'],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

// Type Guards
function add(a: Combinable, b: Combinable) {
  // A type guard using type of
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInfo(emp: UnknownEmployee) {
  console.log('Name: ' + emp.name);
  if ('privileges' in emp) {
    console.log('Privileges: ' + emp.privileges);
  }

  if ('startDate' in emp) {
    console.log(`Privileges: ${emp.startDate}`);
  }
}

printEmployeeInfo(e1);

class Car {
  drive() {
    console.log(`Driving...`);
  }
}

class Truck {
  drive() {
    console.log(`Driving A Truck...`);
  }

  loadCargo(amount: number) {
    console.log(`Loading Cargo... ${amount} kg`);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

// function useVehicle(vehicle: Vehicle) {
//   vehicle.drive();
//   if (`loadCargo` in vehicle) {
//     vehicle.loadCargo(1000);
//   }
// }

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

// since classes are compiled to something JavaScript understands, constructor functions, it is able to use that.

// If we would be using a interface here instead of a class, and, therefore, of course, we couldn't have the implementation in here, but we'll do that when we create a object with the object literal notation, then we could not use instanceof because interfaces, as you learned, are not compiled to any JavaScript code, and, therefore, we can't use them at runtime. For classes we can do that because JavaScript supports classes and constructor functions, and with instanceof, you can then find out if some object is based on that class.

useVehicle(v1);
useVehicle(v2);

// Discriminated Union: It's a pattern, which you can use when working with union types, that makes implementing type guards easier. It is available when you work with object types.

interface Bird {
  type: 'bird';
  flyingSpeed: number;
}

interface Horse {
  type: `horse`;
  runningSpeed: number;
}

type Animal = Bird | Horse;
// Now this is a discriminated union because we have one common property in every object that makes up our union, which describes that object, so that we can use this property that describes this object in our check to have 100% type safety and understand which properties are available for such an object and which properties are not.

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case 'bird':
      speed = animal.flyingSpeed;
      break;
    case 'horse':
      speed = animal.runningSpeed;
  }

  console.log(`Moving at speed: ${speed} kmph`);
}

moveAnimal({ type: `bird`, flyingSpeed: 10 });

// Type Casting:  helps you tell TypeScript that some value is of a specific type where TypeScript is not able to detect it on it's own, but you as a developer know that it will be the case.

const paragraph = document.querySelector(`p`);
// const userInputElement = <HTMLInputElement>(
//   document.getElementById('user-input')
// );

const userInputElement = document.getElementById(
  'user-input'
)! as HTMLInputElement;

userInputElement.value = 'Hi There!';

// ! exclamation mark allows us to tell TypeScript that the expression in front of it will never yield null.

// If we're not sure that an expression might return null or not

const userInput = document.getElementById('user-input')!;

if (userInput) {
  (userInput as HTMLInputElement).value = 'Hi there';
}

// Index properties
interface ErrorContainer {
  id: string;
  [prop: string]: string;

  // So with that I'm saying I don't know the exact property name. I also don't know the property count. I just know that every property which is added to this object, which is based on error container, must have a property name which can be interpreted as a string and the value of the property also must be a string.
}

const errorBag: ErrorContainer = {
  id: `e1`,
  email: `Not a valid email`,
  userName: `Must start with a capital character`,
};

// Function Overloads: a feature that allows us to define multiple function signatures, so to say, for one and the same function. Which simply means we can have multiple possible ways of calling a function with different parameters,

function sum(a: string, b: string): string;
function sum(a: number, b: number): number;
function sum(a: Combinable, b: Combinable) {
  // A type guard using type of
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = sum(`Max`, ` Schwarz`);

result.split('');
