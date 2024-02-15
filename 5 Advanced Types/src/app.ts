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
