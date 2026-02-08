// arrow functions = concise way to write function expressions good for simple func that we will oly use once
// (parameter)=> some code

const hello = (name) => {console.log(`Hello ${name}`);
                        console.log("You are old");
                            }
hello("Morning");

setTimeout(function(){
    console.log("Hello");
},3000);
setTimeout(()=>console.log("Hello"),3000);

const numbers=[1,2,3,4,6,7];
const squares=numbers.map((element)=>element**2);
const evenNums=numbers.filter((element)=>element%2===0);
const total=numbers.reduce((accumulator,element)=>accumulator+element);

console.log(squares);
console.log(evenNums);
console.log(total);