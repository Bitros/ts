// basic types
function add(n1: number, n2: number, showResult: boolean, phrase: string): number {
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
const dog: object = {};
console.log(dog);

const person: {
  name: string,
  age: number,
  hobbies: string[]
} = {
  name: "bitros",
  age: 18,
  hobbies: ["Sports", "Cooking"]
};
console.log(person);
person.hobbies.forEach(hobby => {
  console.log(hobby.toUpperCase());
});