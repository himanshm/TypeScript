function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

/*A decorator factory is basically returns a decorator function, but allows us to configure it when we assign it as a decorator to something. */

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
