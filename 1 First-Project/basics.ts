console.log('Your code goes here...');
// TypeScript's type syetem only helps you during development (i.e. before the code gets compiled.)

// The key difference is: JavaScript uses 'dynamic types' (resolved at runtime), TypeScript uses 'static types' (set during development).

// Important: Type Casing
// In TypeScript, you work with types like `string` or `number` all the times.

// Important: It is `string` and `number` (etc.), NOT `String`, `Number` etc.

// The core primitive types in TypeScript are all lowercase!
// In JavaScript and the same is true in TypeScript, all numbers are floats by default.

// Core Types: number, string, boolean

function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}

// Type Inference: TypeScript does its best to understand which types it has in a certain variable or contant. TypeScript is able to perfectly infer the type of a varaible by looking at its value when it's assigned, when it is not assigned then we can explicitly assign the type of the variable. If a type is not declared on a variable declaration, it is assigned `any` type by default, which is a fallback type for the unassigned variables.
// The core task of typescript is Checking types and yelling at us iif we're using them incorrectly

let number1 = 5;
let number2: number;
number2 = 5.6;

const printResult = true;
const resultPhrase = 'Result is: ';

add(number1, number2, printResult, resultPhrase);
