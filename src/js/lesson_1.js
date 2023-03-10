"use strict";
// basic types
function add(n1, n2, showResult, phrase) {
    const sum = n1 + n2;
    if (showResult) {
        console.log(phrase + sum);
    }
    return sum;
}
// do not need to assign type if you give default value and always give.
const n1 = 5;
const n2 = 6;
const showResult = true;
const phrase = "Sum : ";
add(n1, n2, showResult, phrase);
// object and array
const dog = {};
console.log(dog);
const person = {
    name: "bitros",
    age: 18,
    hobbies: ["Sports", "Cooking"]
};
console.log(person);
person.hobbies.forEach(hobby => {
    console.log(hobby.toUpperCase());
});
