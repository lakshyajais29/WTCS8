const aa = () => { return { user: "Lakshya" } };
console.log(aa());

const bb = () => [1, 2, 3, 4, 5, 6];
console.log(bb());

const user = {
    name: "aj", age: 20,
    welcome: function () {
        console.log(`hello $(this.name)`);
        console.log(this);
    }
};
user.welcome();
// console.log(f);
