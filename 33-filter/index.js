// .filter() = creates new array by fltering elements

let numbers=[1,2,3,4,5,6,7];
function isEven(element){
    return element%2===0;
}
let evennums=numbers.filter(isEven);
console.log(evennums);

function isOdd(element){
    return element%2!==0;
}
let oddnums=numbers.filter(isOdd);
console.log(oddnums);


const ages=[16,17,18,9,19,40];

function isAdult(element){
    return element>=18;
}
const adults=ages.filter(isAdult);
console.log(adults);

