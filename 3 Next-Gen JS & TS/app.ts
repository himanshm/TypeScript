console.log('Time to get started...');

// Var has global and function scope, let and const have block scope - > block is a snippet surrounded with curely braces

// Arrow functions
const add = (a: number, b: number = 7) => a + b;

const printOutput: (a: number | string) => void = (output) =>
  console.log(output);

// Default arguments of functions have to be last in the argument list

const hobbies = ['Sports', 'Reading'];

const activeHobbies = ['Coding'];

activeHobbies.push(...hobbies);

// console.log(activeHobbies);

const person = {
  personName: 'Max',
  personAge: 24,
};

// console.log({ ...person });

// Rest Parameters

const addMany = (...numbers: number[]) => {
  console.log(numbers);
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

console.log(addMany(2, 3, 4, 5, 6, 7, 8, 9, 7, 5));

// Destructuring
// Array
const [hobby1, hobby2] = hobbies;

console.log(hobby1, hobby2);

// Object
// The important thing here is for array destructuring, elements are pulled out in order because an array is an ordered list. In objects, the order is not always guaranteed, and therefore, we don't pull elements out by position, but by key name. So the values, or the names you specify here between the curly braces, are not arbitrary. You can't come up with names here. These have to be property names you find in the object, so that the values for these key can be pulled out of the object And then they're stored in constants or variables of the same name.

const { personName, personAge } = person;

console.log(personName, personAge);

const { personName: userName, personAge: userAge } = person;

console.log(userName, userAge);
