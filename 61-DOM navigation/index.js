// DOM navigation=Process of navigating through structure of an HTML doc using javascript

//.firstElementChild
//.lastElementChild
//.nextElementSibling
//.previousElementSibling
//.children
//.parentElement

// ------------- .firstElementChild ------------

const element=document.getElementById("fruits");
const firstChild=element.firstElementChild;
console.log(firstChild);
firstChild.style.color="red";

const ulElem=document.querySelectorAll("ul");
ulElem.forEach(elem=>{
    const firstChildElem=elem.firstElementChild;
    console.log(firstChildElem);
    firstChildElem.style.backgroundColor="blue";

})


const elementLast=document.getElementById("rootveg");
const LastChild=elementLast.lastElementChild;
console.log(LastChild);
LastChild.style.color="red";


const ulElements=document.querySelectorAll("ul");
ulElements.forEach(elem=>{
    const lastChildElem=elem.lastElementChild;
    lastChildElem.style.backgroundColor="blue";

})



const eleMent=document.getElementById("rootveg");
const nextsibling=eleMent.nextElementSibling;
console.log(nextsibling);
nextsibling.style.backgroundColor="red";

const prevElem=document.getElementById("fruits");
const prevSibling=prevElem.previousElementSibling;
console.log(prevSibling);
prevSibling.style.backgroundColor="red";


const elementP=document.getElementById("apple");
const parent=elementP.parentElement;

console.log(parent);
parent.style.backgroundColor="red";

const chElement=document.getElementById("fruits");
const children=chElement.children;
console.log(children);
Array.from(children).forEach(elem=>{
    elem.style.backgroundColor="yellow";
})