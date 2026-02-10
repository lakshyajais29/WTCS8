const student = {
    name: "Lakshya",
    age: 19,
    address: {
        city: "Ghaziabad",
        state: "UP"
    }
}


// const name = student.name;
// console.log(name);

// destructre karke sabko ek sath print karva diya 

// yaha stuname ko name se change kar diya  just variable name chnage
// aur ek bar object mai value dedi toh wahi value rahegi 
// const { name: stuname, age } = student;
// console.log(stuname, age);


// if we need any by default value then we do like this
const { name: stuname = "guest", age } = student;
console.log(stuname, age);


const { address: { city } } = student;
console.log(city);


// function displaystu(object) {
//     console.log(`My name is ${object.name} and i am ${object.age} years old`);
// }

// displaystu(student);

// now destructure object

function displaystu({ age, name }) {
    console.log(`My name is ${name} and i am ${age} years old`);
}

displaystu(student);


// destrcuting in array
let numbers = [10, 20, 30]

let a, b, c = numbers;
console.log(a);
console.log(b);
console.log(c);
// // in this first 2 will be undefine and last wale mai c mai array ayega pura because it reads like let a;
// let b;
// let c = numbers;

let num = [1, 2];
let [e = 10, d = 20] = num;
console.log(e, d);
// print toh wahi hoga 1 and 2 but if value nahi hongi toh defalt mai 10 ,20


// comman to seperate a value
let color = ["red", "green", "blue"];
let [, , c3] = color;
console.log(c3);

// swap values
let [p, q] = [10, 20];
[q, p] = [p, q];
console.log(p, q);