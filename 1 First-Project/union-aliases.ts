// Union Type

function combine(input1: number | string, input2: number | string) {
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number') {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  return result;
}

const combineAges = combine(23, 39);
console.log(combineAges);

// Alternative of forcing a change to number type using '+' operator is using parseFloat

// Literal Types - Literally defining types

function combineAnyThing(
  input1: number | string,
  input2: number | string,
  resultConversion: 'as-number' | 'as-text'
) {
  let result;
  if (
    (typeof input1 === 'number' && typeof input2 === 'number') ||
    resultConversion === 'as-number'
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  return result;
}

console.log(combineAnyThing('30', '26', 'as-number'));

// Type Aliases / Custom Types
type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';

function newCombine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor
) {
  let result;
  if (
    (typeof input1 === 'number' && typeof input2 === 'number') ||
    resultConversion === 'as-number'
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  return result;
}

// Type aliases can be used to "create" your own types. You're not limited to storing union types though - you can also provide an alias to a (possibly complex) object type.

type UserOne = { name: string; age: number };
const u1: UserOne = { name: 'Max', age: 30 }; // this works!

// This allows you to avoid unnecessary repetition and manage types centrally.

// For example, you can simplify this code:

function greetMe(user: { name: string; age: number }) {
  console.log('Hi, I am ' + user.name);
}

function whoIsOlder(user: { name: string; age: number }, checkAge: number) {
  return checkAge > user.age;
}

// To:

type User = { name: string; age: number };

function greet(user: User) {
  console.log('Hi, I am ' + user.name);
}

function isOlder(user: User, checkAge: number) {
  return checkAge > user.age;
}
