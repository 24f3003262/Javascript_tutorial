let fruits=["apple","orange","banana"];

console.log(fruits[0]);
console.log(fruits[1]);
fruits[2]="coconut";
console.log(fruits[2]);
console.log(fruits[3]);
fruits.push("new");
console.log(fruits[3]);
fruits.pop()
console.log(fruits[3]);

fruits.unshift("first"); //add element to the beginning
console.log(fruits);
fruits.shift("first"); //remove element to the beginning
console.log(fruits);
let numOfFruits=fruits.length;
let index=fruits.indexOf("apple");
console.log(numOfFruits);
console.log(index);

for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}

fruits.sort();
console.log(fruits);
fruits.sort().reverse();
console.log(fruits);