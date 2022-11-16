"use strict";
const firstName = 'Prasert';
const lastName = 'K.';
const province = "Bangkok";
console.log(firstName + '  ' + lastName);
console.log(province);
// function greet(noun: string) {
//     console.log(`Hello, ${noun}!`)
//   }
//   greet('World') // Prints: Hello, World  
//   greet(2020) // Argument of type 'number' is not assignable to parameter of type 'string'.
function greet(name) {
    console.log(`Hello, ${name || 'stranger'}!`);
}
greet('Namo'); // Prints: Hello, stranger!
function exponentiation(power = 1) {
    console.log(4 ** power);
}
exponentiation(); // Prints: 4
exponentiation(4); // Prints: 256
// exponentiation(true); // Error: Argument of type 'true' is not assignable to parameter of type 'number | undefined'
function factOrFiction() {
    return Math.random() >= .5 ? true : false;
}
const myAnswer = factOrFiction(); // Type 'string' is not assignable to type 'boolean'
console.log(myAnswer);
function sayHello() {
    console.log('Hello!');
}
function trueOrFalse(value) {
    if (value) {
        return true;
    }
    return false;
    // return 'false' // Typescript Error: Type 'string' is not assignable to type 'boolean'.
}
// // zipcodes is an array of strings
// let zipcodes: string[] = ['03255', '02134', '08002', '03063']
// // Pushing a number to zipcodes will generate an error
// // Error: Argument of type 'number' is not assignable to parameter of type 'string'.
// zipcodes.push('90210')
// // zipcodes is an array of strings
// let zipcodes: Array<string> = ['03255', '02134', '08002', '03063']
// // Error: Argument of type 'number' is not assignable to parameter of type 'string'.
// zipcodes.push('90210')
// one-dimensional arrays
let zipcodesNH = ['03255', '03050', '03087', '03063'];
let zipcodesMA = ['02334', '01801'];
// two-dimensional array
let zipcodes = [zipcodesNH];
// Pushing a one-dimensional array to a two-dimensional array
zipcodes.push(zipcodesMA);
console.log(zipcodes); // prints [["03255", "03050", "03087", "03063"], ["02334", "01801"]]
// This is an array
let header = ['Name', 'Age', 'Smoking', 'Salary'];
// This is a tuple
let profile = ['Kobe', 39, true, 150000];
let answer; // any type
let typedAnswer; // union type
const choices = ['NO', 'YES'];
const processAnswer = (answer) => {
    if (typeof answer === 'number') {
        console.log(choices[answer]);
    }
    else if (typeof answer === 'boolean') {
        if (answer) {
            console.log(choices[1]);
        }
        else {
            console.log(choices[0]);
        }
    }
};
processAnswer(true); // Prints "YES"
processAnswer(0); // Prints "NO"
let user = {
    id: 1,
    name: "Samit",
    dateOfBirth: new Date("1982-11-10")
};
console.log(user);
