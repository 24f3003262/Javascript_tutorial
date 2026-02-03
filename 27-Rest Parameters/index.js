// rest parameters = (...rest) allow a function work with a variable number of arguments by bundling them into an array
//similar and opposite to spread

function openFridge(...foods){
    console.log(foods);
    console.log(...foods);
}

function getFood(...foods){
    return foods;
}

function sum(...numbers){
    let result=0;
    for(let number of numbers){
        result+=number;
    }
    return result;
}

function combineString(...strings){
    return strings.join(" ");
}

const food1="chicken";
const food2="hamburger";
const food3="hotdog";
const food4="sushi";
const food5="ramen";
openFridge(food1,food2,food3,food4,food5);

const foods=getFood(food1,food2,food3,food4,food5);
console.log(foods);



const total=sum(1,2,3,5);
console.log(`Your total is ${total}`);


const fullName=combineString("Mr.","Subhraneel","Bhadury");

console.log(fullName);