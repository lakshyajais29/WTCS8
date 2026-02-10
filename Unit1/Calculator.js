// const a = prompt("Enter first no.: ");
// const b = prompt("Enter second no. smaller than first: ");

// function Calculator(a, b) {
//     (add) => {
//         return a + b;
//     }
//     (sub) => {
//         return a - b;
//     }
//     (mul) => {
//         return a * b;
//     }
//     (div) => {
//         return a / b;
//     }
// }
// const cal = prompt("what you want to perform: ");

// if (cal == "add") {
//     console.log(add(a, b));
// }
// else if (cal == "sub") {
//     console.log(sub(a, b));
// }
// else if (cal == "mul") {
//     console.log(mul(a, b));
// }
// else if (cal == "div") {
//     console.log(div(a, b));
// }

const cal = () => ({
    add: (a, b) => a + b,
    sub: (a, b) => a - b,
    mul: (a, b) => a * b,
    div: (a, b) => a / b,
})

const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

r1.question("Enter oper: ", (oper) => {
    if (oper == "add") {
        console.log(cal().add(10, 20));
    }
    else if (oper == "sub") {
        console.log(cal().sub(10, 20));
    }
    else if (oper == "mul") {
        console.log(cal().mul(10, 20));
    }
    else if (oper == "div") {
        console.log(cal().div(10, 20));
    }
    r1.close(); d
})


// console.log(cal().add(10, 20));
// console.log(cal().sub(10, 20));
// console.log(cal().mul(10, 20));
// console.log(cal().div(10, 20));
