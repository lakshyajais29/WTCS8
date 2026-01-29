(function show() {
    console.log("Welcome to JS");
})(); // IIFE immidiate invoke function expression

//Hosting kya hota ?
//Hosting means function ko top me lekar jana

// Arrow function

const show = () => {
    console.log("Arrow function");
}
show();
// arrow function surrounding se values leta hai
// iske pass apna this nahi hota hai surrounging se this leta hai
// normal function ke pass apna this hota hai
// arrow function ke pass arguments nahi hota hai
function person() {
    this.name = "Lakshya";
    this.age = 20;

    setTimeout(() => {
        console.log(this.name);
        console.log(this.age);
    }, 1000);
}
person();

function person() {
    this.name = "Lakshya";
    this.age = 20;

    setTimeout(function () {
        console.log(this.name);
        console.log(this.age);
    }, 1000);
}
person();

