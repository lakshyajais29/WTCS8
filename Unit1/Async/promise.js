console.log("1. Start");

const p = new Promise((resolve, reject) => {
    console.log("2. Promise created");
    setTimeout(() => {
        resolve("3. Promise resolved");
    },1000);

});
console.log("4. After promise creation");

p.then((value) => {
    console.log(value); // runs AFTER resolve (...)
    console.log("5. then() runs only when promise is resolved")
});

console.log("6. End");

// To solve promise chain
// previous callback hell

function roll(num, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Roll. no. is " + num);
      resolve(num);
    }, delay);
  });
}

async function run() {
  try {
    await roll(12212, 1000);
    console.log("wait its getting downloaded");

    await roll(12312, 2000);
    console.log("wait its getting downloaded");

    await roll(12412, 3000);
    console.log("wait its almost over");

    await roll(12512, 4000);
    console.log("Finished download flow");
  } catch (err) {
    console.log("Error:", err);
  } finally {
    console.log("Done with viva");
  }
}

run();