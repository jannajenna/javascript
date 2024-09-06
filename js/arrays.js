
let hobbit = ["Frodo", "Samwise", "Meriadoc", "Peregrin", "Bilbo"];


console.log(hobbit[0]);
console.log(hobbit.indexOf('Peregrin'));
console.log(hobbit.indexOf('Gandalf'));
hobbit.push('Smeagol');
console.log(hobbit);
hobbit.slice(0, 3);
console.log(hobbit);

const obj1 = {
    firstName: 'Aragron',
    lastName: 'the Human',
    email: 'aragorn@gmail.com',
}

const obj2 = {
    firstName: 'Elrond',
    lastName: 'the Elf',
    email: 'elrond@gmail.com',
}

let others = [obj1, obj2];

console.log(others);
console.log(others[0].email);