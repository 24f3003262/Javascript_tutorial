// spread operator = ... allows an iterable such as an array or string to be expanded into separate elements(unpacks the elements)

let numbers=[1,2,3,4,5,6];  
console.log(numbers);

let maximum=Math.max(...numbers);
console.log(maximum);

let username="Bro Code";
let letters=[...username];
console.log(letters);
letters=[...username].join("-");
console.log(letters);

let fruits=["apple","orange","banana"];
console.log(fruits);
//Spread operator can allow me to make a shallow copy.

let newfruits=[...fruits];
console.log(newfruits);

let extrafruits=["guava","jackfruit"];

let finalfruits=[...fruits,...extrafruits,"hehe"]; 

console.log(finalfruits);