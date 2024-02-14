interface Person {
  name: string;
  age: number;

  greet(pharse: string): void;
}

// An interface will be used as a custom type. A interface can't have an initialiser. We can just define the structure, not the concrete values.
let user1: Person;

user1 = {
  name: 'Max',
  age: 30,
  greet(pharse: string) {
    console.log(pharse + ' ' + this.name);
  },
};
