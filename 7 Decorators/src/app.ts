function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

@Logger('LOGGING - PERSON')

/*So the decorator runs when JavaScript finds your class definition, your constructor function definition. Not when you use that constructor function to instantiate an object. */
class Person {
  name = 'Max';

  constructor() {
    console.log('Creating person object...');
  }
}

const pers = new Person();

console.log(pers);
