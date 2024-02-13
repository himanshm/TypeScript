console.log('Your code goes here...');
// TypeScript's type syetem only helps you during development (i.e. before the code gets compiled.)
// The key difference is: JavaScript uses 'dynamic types' (resolved at runtime), TypeScript uses 'static types' (set during development).
// Important: Type Casing
// In TypeScript, you work with types like `string` or `number` all the times.
// Important: It is `string` and `number` (etc.), NOT `String`, `Number` etc.
// The core primitive types in TypeScript are all lowercase!
// In JavaScript and the same is true in TypeScript, all numbers are floats by default.
// Core Types: number, string, boolean
function add(n1, n2, showResult, phrase) {
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
var number1 = 5;
var number2 = 5.6;
var printResult = true;
var resultPhrase = 'Result is: ';
add(number1, number2, printResult, resultPhrase);
