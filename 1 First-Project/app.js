// Object types are written almost like objects, but we don't have key:value pairs in there, but key:type pairs separated by semi-colon
var person = {
    name: 'Himanshu',
    age: 29,
};
//  Nested Objects & Types
// Of course object types can also be created for nested objects.
var product = {
    id: 'abc1',
    price: 12.99,
    tags: ['great-offer', 'hot-and-new'],
    details: {
        title: 'Red Carpet',
        description: 'A great carpet - almost brand-new!',
    },
};
// but above definition is suboptimal, of course TypeScript doesn't complain as it infers it to the type it wants and we can have a look if we hover over product but the optimal way of doing it would be
var optimalProduct = {
    id: 'abc1',
    price: 12.99,
    tags: ['great-offer', 'hot-and-new'],
    details: {
        title: 'Red Carpet',
        description: 'A great carpet - almost brand-new!',
    },
};
// Tuples - TypeScript type -- Fixed length array also fixed type
var myPerson = {
    name: 'Himanshu',
    age: 29,
    hobbies: ['Sports', 'Coding'],
};
for (var _i = 0, _a = myPerson.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
