console.log("Hello World");
//document.write("From JS");
//a = 10; // sloppy mode
// let b = 30;
// var c = 40; // visible on windows object
// console.log(window);

// var a = 10;
// var a = 20;
// console.log(a); // a will be 20 as var allows redeclaration

// let d = 10;
// let d = 20;
// console.log(x); // x will be 10 as let does not allow redeclaration



// function hello() {
//     if (true) {
//         var x = 10; // scope of var is global
//         console.log(x);
//     }
//     console.log(x);
// }
// hello();

// function hello() {
//     if (true) {
//         let x = 10; // scope of let is local 
//         console.log(x);
//     }
//     console.log(x);
// }
// hello();

// console.log(z);
// var z = 20;   // it will don't give error just show value is undefined

// console.log(y);
// let y = 20;   // it will give error 


const x = 10;
// x = 20; // reassigning is not allowed
console.log(x);

const arr = [1, 2, 3, 4, 5];
// arr = [6, 7, 8, 9, 10]; this is not allowed
arr.push(6); // but we can push the value in the array as we are only changing the value of the array not the array itself
console.log(arr);