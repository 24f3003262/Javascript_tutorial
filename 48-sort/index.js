// sort() = used to sort elements in place. Sort elements as strings in lexicological order, not alphabetical 
// lexicographic = (alphabet+numbers+symbols) as strings

let fruits=["apple","orange","banana","coconut","pineapple"];
fruits.sort();
console.log(fruits);

let numbers=[1,0,9,2,7,10,13,99,27,25];
numbers.sort();
console.log(numbers);

numbers.sort((a,b)=>a-b);
console.log(numbers);

numbers.sort((a,b)=>b-a);
console.log(numbers);

const people=[{name:"John", age: 30,gpa:3.0},
            {name:"Patrick", age:37,gpa:2.5},
            {name:"Squidward",age:25,gpa:3.5}]; 

// people.sort((a,b)=>b.age-a.age);
// console.log(people);
// people.sort((a,b)=>b.gpa-a.gpa);
// console.log(people);

people.sort((a,b)=>a.name.localeCompare(b.name));
console.log(people);    