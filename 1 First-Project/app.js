// Unknown type
var userInput;
var userName;
userInput = 5;
userInput = 'Max';
// userName = userInput; //Type 'unknown' is not assignable to type 'string'.
if (typeof userInput === 'string') {
    userName = userInput;
}
// So, I need such an extra type check here with unknown to be able to assign a unknown value to a value with a fixed type
// never type - never is another type functions can return
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('An Error Occured!', 500);
