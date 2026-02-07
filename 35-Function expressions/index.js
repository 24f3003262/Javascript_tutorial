// function expressions = way to define functions as values or expressions

// const hello =function(){
//     console.log("hello");
// }

// hello();

// function hello(){
//     console.log("hello");
// }
// setTimeout(hello,3000);

setTimeout(function(){
    console.log("hello");
},5000);



const num=[1,2,3,4,5];

// function square(element){
//     return element**2;
// }

// console.log(num.map(square));

const squares=num.map(function(element){
    return element**2;
});
console.log(squares);

const evens=num.filter(function(element){
    return element%2===0;
})
console.log(evens);