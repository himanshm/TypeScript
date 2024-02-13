// Functions
function add(n1: number, n2: number): number {
  return n1 + n2;
}

// Since both the parameters are of type numbers, TypeScript is able to infer that the return type will be number.

// If you don't have specifc reason for setting the type, you should not set the type and instead let TypeScript infer the type.

// void type -- The return type of functions which don't return anything- TypeScript specific

function printResult(num: number): void {
  console.log('Result: ' + num);
}

printResult(add(5, 12));

// In javaScript, the return value of a function which doesn't return anything is `undefined`

// You should use void as the return type of the function which doesn't return anything and not `undefined`, with void you make it clear that the function does not have a return statement.

// If we use undefined instead: then we will have to add a return statement where we don't return a value

// setting `undefined` as return type no longer cause compilation error?

function printAndStop(num: number): undefined {
  console.log('Result: ' + num);
} // Expected error: A function whose declared type is neither 'void' nor 'any' must return a value.

printAndStop(add(2, 3)); // This now works. TypeScript doesn't seem to yell at me for explicitly setting the undefined return type to the printResult() function, even though there is no explicit return; statement.

// Functions as Types

// Function is a type provided by TypeScript

let combineValues: Function;

combineValues = add;

console.log(combineValues(2, 5));

combineValues = printResult;

console.log(combineValues(2, 5)); // undefined

// Function Types are types that describe a function regarding the parameters and return value of that function.

let addValues: (a: number, b: number) => number;

addValues = add; // No TypeScript Complaints

// addValues = printAndStop  // TypeScript Complains Type '(num: number) => undefined' is not assignable to type '(a: number, b: number) => number'.nType 'undefined' is not assignable to type 'number'.

// Function Types and Callbacks

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;

  cb(result);
}

addAndHandle(20, 30, (result) => {
  console.log(result);
});

// by specifying `void` type here, we make it really clear that inside of addAndHandle we're not interested in any return value. So this does not force you to pass in a callback that does not return anything. It just tells you that anything you might return will not be used.