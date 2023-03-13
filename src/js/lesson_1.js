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
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
})(Role || (Role = {}));
var InitializedRole;
(function (InitializedRole) {
    InitializedRole["ADMIN"] = "ADMIN";
    InitializedRole[InitializedRole["READ_ONLY"] = 110] = "READ_ONLY";
})(InitializedRole || (InitializedRole = {}));
const person = {
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
const anyAction = "test";
// no error. IDE type checking does not work, but error raised when running
// anyAction.pop().push();
console.log(anyAction);
const unknownAction = "test";
// IDE type checking works well. 
// error: 'unknownAction' is of type 'unknown'
// unknownAction.pop().push();
console.log(unknownAction);
function voidTest1() {
    // void means nothing to return or return undefined
    return undefined;
}
function voidTest2() {
    // void means nothing to return or return undefined
}
voidTest1();
voidTest2();
// never means never happen.
function neverTest() {
    // error: Type 'undefined' is not assignable to type 'never'
    // return undefined;
    // if no throw statement here. 
    // error: A function returning 'never' cannot have a reachable end point
    throw new Error("unreachable");
}
neverTest();
