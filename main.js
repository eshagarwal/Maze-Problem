let x = 2;
console.log(typeof(x))

let y = ["cat", "dog"];
console.log(y[1]);
console.log(y.length);
// add element to array
y.push("bird");
console.log(y);

function evenOdd(num) {
    if (num % 2 == 0){
        return "even";
    }
    else {
        return "odd";
    }
    }
console.log(evenOdd(2));

const person = {
    name: "John",
    age: 30,
    city: "New York"
}

for (let key in person){
    // console.log(key);
    console.log(person[key]);
}

const array = [1, 2, 3, 4, 5];

array.forEach(function(item){
    console.log(item);
});

function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function calculator(a, b, operation){
    var result = operation(a, b);
    return result;
}

console.log(calculator(2, 3, add))
console.log(calculator(2, 3, subtract))

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];

const children = arr1.concat(arr2).join(" "); 

console.log(children);

const revered_array = arr2.reverse();
console.log(revered_array);

let a = Math.min(5, 10);
let b = Math.max(5, 10);
console.log(a, b);

let random = Math.floor(Math.random() * 100);
console.log(random);