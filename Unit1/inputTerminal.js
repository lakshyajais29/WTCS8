const r1 = require("readline").crateInterface({ // require is used to import and package
    input: process.stdin,
    output: process.stdout,
})

r1.question("Enter something: ",
    (answer) => {
        console.log("Answer: ", answer);
        r1.close();
    }
);

// it works asyncronously so we need to close it in the function itself not outside