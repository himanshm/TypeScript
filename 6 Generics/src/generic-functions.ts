// Built in generics

const names: Array<string> = [];

const promise: Promise<string> = new Promise((resolve, reject) => {});

// Generic Functions

function merger<T, U>(objA: T, objB: U) {
  return Object.assign({}, objA, objB);
}

// This comes from the fact that Object.assign accepts an object as a first argument, but then can accept an arbitrary number of any arguments.

// The fact that we get the error for the first argument only, is a consequence of the Object.assign definition in native JS:

function merge<T, U>(objA: T, objB: U) {
  return { ...objA, ...objB };
}

const mergeObj = merge({ name: 'Him', hobbies: ['Sports'] }, { age: 30 });

console.log(mergeObj);
console.log(mergeObj.name);

const mergeOb = merger({ name: 'Him', hobbies: ['Sports'] }, { age: 30 });

console.log(mergeOb);
console.log(mergeOb.name);

// Constraints (extends)

function mergeObjs<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign({}, objA, objB);
}

const newMergedObjs = mergeObjs({ name: 'Him' }, { age: 30 });

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = `Got no value...`;

  if (element.length === 1) {
    descriptionText = `Got 1 element.`;
  } else if (element.length > 1) {
    descriptionText = `Got ${element.length} elements.`;
  }
  return [element, descriptionText];
}

console.log(countAndDescribe(`Hi there...`));

// 'keyof'constraint

// function extractAndConvert(obj: object, key: string) {
//   return obj[key];  // We can not guarantee that obj has an element key in it
// }

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return obj[key];
}

extractAndConvert({ name: 'Max' }, `name`);
