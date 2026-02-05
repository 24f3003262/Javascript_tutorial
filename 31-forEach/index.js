// forEach method iterates over an array and applies a callback function over each item in the array


// let numbers=[1,2,3,4,5];

// numbers.forEach(cube);
// numbers.forEach(display);

// function double(element,index,array){
//     array[index]=element*2;
// }

// function triple(element,index,array){
//     array[index]=element*3;
// }

// function square(element,index,array){
//     array[index]**=2;
// }

// function cube(element,index,array){
//     array[index]**=3;
// }

// function display(element){
//     console.log(element);
// }

let fruits=["apple","banana","orange","coconut"];

fruits.forEach(capitalise);
fruits.forEach(display);

function uppercase(element,index,array){
    array[index]=element.toUpperCase();
}

function capitalise(element,index,array){
    array[index]=element.charAt(0).toUpperCase()+element.slice(1);
}

function display(element){
    console.log(element);
}