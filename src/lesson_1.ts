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

enum Role { ADMIN, READ_ONLY }

enum InitializedRole { ADMIN = "ADMIN", READ_ONLY = 110 }

const person: {
  name: string;
  age: number;
  hobbies: string[];
  mixedRole: (number | string)[];
  tupleRole: [number, string];
  enumRole: Role;
  initializedEnumRole: InitializedRole;
} = {
  name: "bitros",
  age: 18,
  hobbies: ["Sports", "Cooking"],
  mixedRole: [2, "author"],
  tupleRole: [2, "author"],
  enumRole: Role.ADMIN,
  initializedEnumRole: InitializedRole.ADMIN,
};

console.log(person);
person.hobbies.forEach(hobby => {
  console.log(hobby.toUpperCase());
});
for (const hobby of person.hobbies) {
  console.log(hobby.toLowerCase());
}

// uncommon loop, disallowed in eslint but type here for learning purpose
// eslint-disable-next-line @typescript-eslint/no-for-in-array
for (const key in person.hobbies) {
  // Do not use this way to call function not secure
  // person.hobbies.hasOwnProperty(key);
  if (Object.prototype.hasOwnProperty.call(person.hobbies, key)) {
    const hobby = person.hobbies[key];
    console.log(key);
    console.log(hobby);
  }
}

// any, unknown, void, never
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const anyAction: any = "test";
// no error. IDE type checking does not work, but error raised when running
// anyAction.pop().push();
console.log(anyAction);

const unknownAction: unknown = "test";
// IDE type checking works well. 
// error: 'unknownAction' is of type 'unknown'
// unknownAction.pop().push();
console.log(unknownAction);

function voidTest1(): void {
  // void means nothing to return or return undefined
  return undefined; 
}
function voidTest2(): void {
  // void means nothing to return or return undefined
}
voidTest1();
voidTest2();

// never means never happen.
function neverTest(): never {
  // error: Type 'undefined' is not assignable to type 'never'
  // return undefined;
  // if no throw statement here. 
  // error: A function returning 'never' cannot have a reachable end point
  throw new Error("unreachable");
}
neverTest();
