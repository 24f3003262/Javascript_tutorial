//.map() = accepts a callback and applies that function to each element of an array, then return a new array
// very similar to .forEach only difference is map returns a new array, foreach changes the original array
// const numbers=[1, 2,3,4,5];

// const squaredNumbers=numbers.map(square);
// console.log(squaredNumbers);
// function square(numer){
//     return numer**2;
// } 

// const students=["Patrick","Squidward","Sandy"]

// function uppercase(element){
//     return element.toUpperCase();
// }

// const studentup=students.map(uppercase);
// console.log(studentup);

const dates=["2024-1-10","2025-2-15","2026-1-10"];

function formatDates(element){
    const parts=element.split("-");
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
}

const formattedDates=dates.map(formatDates);
console.log(formattedDates);