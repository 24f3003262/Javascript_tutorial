// destructuring = extract values from arrays and objects, then asssign them to variables in a convenient way
// [] to perform array destructuring, {} to perform object destructuring

// E.g. 1 :- Swap value of 2 var

let a=1;
let b=2;

[a,b]=[b,a];

console.log(a);
console.log(b);

// E.g. 2 :- Swap 2 numbers in an array

const colors=["red","green","blue","white","black"];

[colors[0],colors[4]]=[colors[4],colors[0]];

console.log(colors);

// E.g. 3 :- Assign array elements to variables
const [firstColour,secondColour,thirdColour,...remainingColors]=colors;

console.log(firstColour);
console.log(secondColour);
console.log(thirdColour);
console.log(remainingColors);

// E.g. 4 :- Extract values from objects
const person1={
    firstname:"Spongebob",
    lastname:"Squarepants",
    age:30,
    job:"Fry cook",
}

const person2={
    firstname:"Patrick",
    lastname:"Star",
    age:34,
}

// const {firstname,lastname,age,job="unemployed"}=person1;

// console.log(firstname);
// console.log(lastname);
// console.log(age);
// console.log(job);
const {firstname,lastname,age,job="unemployed"}=person2;

console.log(firstname);
console.log(lastname);
console.log(age);
console.log(job);

// e.g. 5 :- destructure in func parameters

function displayPerson({firstname,lastname,age,job="unemployed"}){
    console.log(`name: ${firstname} ${lastname}`);
    console.log(`age: ${age}`);
    console.log(`job: ${job}`);
}

displayPerson(person1);
displayPerson(person2); 