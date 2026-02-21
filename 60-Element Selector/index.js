// Element selectors = methods used to target and manipulate html elements from the DOM

// 1. document.getElementById() //Element or null

const myH1=document.getElementById("myH1");
myH1.style.backgroundColor="yellow";
myH1.style.textAlign="center";
myH1.style.color="blue";


// 2. document.getElementsByClassName() // HTML Collection

const fruits=document.getElementsByClassName("fruits");
// console.log(fruits);

fruits[0].style.backgroundColor="red";
fruits[1].style.backgroundColor="orange";
fruits[2].style.backgroundColor="yellow";

for(let fruit of fruits){
    fruit.style.textAlign="center";
}

//Even though HTML collection feels like an array it has very limited functionalities. #E.g. forEach() method does not work

// We can typecast

Array.from(fruits).forEach(fruit=>fruit.style.color="hsl(273, 92%, 56%)");


//3. getElementByTagName()

const h4Elem=document.getElementsByTagName("h4");
const liElem=document.getElementsByTagName("li");
console.log(h4Elem);

Array.from(h4Elem).forEach(elem=>elem.style.backgroundImage="linear-gradient(to right,hsl(70, 100%, 81%),hsl(97, 97%, 65%))");

for(let litem of liElem){
    litem.style.color="hsl(273, 92%, 56%)";
}

Array.from(liElem).forEach(elem=>elem.style.backgroundImage="linear-gradient(to right,hsl(204, 88%, 80%),hsl(303, 100%, 81%))");



//4.document.querySelector() //First element or null

const element=document.querySelector("ul");
element.style.backgroundColor="pink" // Only changes fruits[0]
console.log(element);

//5.document.querySelectorAll() //NODELISt

const fruitsall=document.querySelectorAll(".fruits");
console.log(fruitsall);

fruitsall[2].style.backgroundImage="linear-gradient(to right,hsl(204, 88%, 80%),hsl(303, 100%, 81%))";  
fruitsall.forEach(fruit=>{
    fruit.style.textAlign="left";
    fruit.style.backgroundImage="linear-gradient(to right,hsl(203, 39%, 12%),hsl(303, 100%, 59%))";

})