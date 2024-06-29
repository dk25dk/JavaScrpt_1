//varaible hoisting

// console.log(x);
// let x = 4;
// console.log(x);
// sayHello();
// function sayHello() {
//     console.log("Hello");
// }


// In javaScrpt hositing is behavior in which var and funtion delection are moved to the top of their scope before code execution

//Clouser



function createCounter() {
    let count = 0;

    return {
        increment: function () {
            count++;
            return count;
        },
        decrement: function () {
            count--;
            return count;
        },
        getCount: function () {
            return count;
        }
    };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1
console.log(counter.getCount()); // 1
