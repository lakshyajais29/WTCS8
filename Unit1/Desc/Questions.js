// //  question 1
// // isko arrow function se karna thaa
// function isEven(...num){
//     for (let i in num){
//         if(num[i] % 2 ==0){
//             console.log(num[i] + " is even");
//         }else{
//             console.log(num[i] + " is odd");    
//         }
//     }
// }

// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// isEven(...num);


// //  question 2
// // by arrow function    
// const reverseString = (str) => {
//     let rev = "";
//     for (let i = str.length - 1; i >= 0; i--){
//         rev += str[i];
//     }
//     return rev;
// }

// let str = "Cat";
// console.log(reverseString(str));

// // question 3
// const nuumber = (...num) => {
//     for (let i in num){ 
//     if(num[i] >= 40){
//         console.log("pass");
//     }else{
//         console.log("fail");
//     }
// }
// }
// let num1 = [50, 30, 40, 60, 20];
// nuumber(...num1);


// question 4
let uiteam = ["rahul", "rohit", "sachin", "virat", "dhoni"];
let flutterteam = ["pulse", "sachin", "virat", "dhoni"];

function showMenu(uiteam,flutterteam,...arr){
    console.log("UI teams are: " + uiteam);
    console.log("Flutter teams are: " + flutterteam);
    console.log("All teams are: " + arr);
    
}

let arr = [...uiteam, ...flutterteam];
showMenu(uiteam, flutterteam , ...arr);

option = [flutterteam, uiteam]; 

function display(arr, option){
    for (let i in arr){
        if(arr[i]==option[0]){
            console.log("Flutter team is: " + arr[i]);
        }        else if(arr[i]==option[1]){
            console.log("UI team is: " + arr[i]);
        }
    }
    console.log("All teams are: " + arr);
}
display(arr, option);