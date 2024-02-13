// Object types are written almost like objects, but we don't have key:value pairs in there, but key:type pairs separated by semi-colon

const person: {
  name: string;
  age: number;
} = {
  name: 'Himanshu',
  age: 29,
};

//  Nested Objects & Types

// Of course object types can also be created for nested objects.

const product = {
  id: 'abc1',
  price: 12.99,
  tags: ['great-offer', 'hot-and-new'],
  details: {
    title: 'Red Carpet',
    description: 'A great carpet - almost brand-new!',
  },
};

// but above definition is suboptimal, of course TypeScript doesn't complain as it infers it to the type it wants and we can have a look if we hover over product but the optimal way of doing it would be

const optimalProduct: {
  id: string;
  price: number;
  tags: string[];
  details: {
    title: string;
    description: string;
  };
} = {
  id: 'abc1',
  price: 12.99,
  tags: ['great-offer', 'hot-and-new'],
  details: {
    title: 'Red Carpet',
    description: 'A great carpet - almost brand-new!',
  },
};
// Arrays

const myPerson: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; // Tuple = > We tell TypeScript that we want an array with exactly two elements, first of which is a number and second is a string
} = {
  name: 'Himanshu',
  age: 29,
  hobbies: ['Sports', 'Coding'],
  role: [2, 'Author'],
};

for (const hobby of myPerson.hobbies) {
  console.log(hobby.toUpperCase()); // All string methods can be accessed here as TypeScript infers hobby to be string
  // console.log(hobby.map());   // !!! ERROR !!!
}

// Tuples - TypeScript type -- Fixed length array also fixed type
// myPerson.role[1] = 10 // Error

myPerson.role.push('Admin'); // This works - allowed in tuples

// Enum Type => TypeScript ONlY => Automatically enumerated global constant identifiers ???
enum Role {
  ADMIN,
  READ_ONLY,
  USER,
}

const newPerson = {
  name: 'Himanshu',
  age: 29,
  hobbies: ['Sports', 'Coding'],
  role: Role.ADMIN,
};
