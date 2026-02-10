// console.log("first");
// console.log("second");  
// console.log("third");

//  callback function is a function that is passed as an argument to another function and is executed after the main function is executed
//  it is used to handle asynchronous operations
// asynchronous operations are operations that take some time to complete and do not block the execution of other code
// example of asynchronous operation is setTimeout function which is used to execute a function after a certain time

// function aa(){
//     console.log("fourth");
// }
// setTimeout(() => {
//     console.log("2 sec delay....")
//     console.log("fourth");
// }, 2000); // setTimeout is an asynchronous function and it will execute the aa function after 2 seconds 

//  2nd asysnchronous opertion
let count = 0;
let aa = setInterval(() => {
    console.log("1 sec delay....")
    console.log("fifth");
    if (count == 5){
        clearInterval(aa); // clearInterval is used to stop the setInterval function
    }
    count++;
}, 1000); // setInterval is an asynchronous function and it will execute the aa function every 1 second