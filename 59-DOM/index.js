//DOM = Document Object Model
// Object is the page seen in web browser and it provides an API to interact with. Web browser constructs the DOm when it loads an html doc and structures all elements in a tree like representation.
// JS can access DOM to dynamically change content structure and style of a web page.

console.log(document); //gives the entire HTML
console.dir(document); //gives all html tags

document.title="DOM";
document.body.style.backgroundColor='hsl(0, 74%, 48%)';

const username="Wee";
const myh1=document.getElementById("myH1");
myh1.textContent+=username===""?' Guest':` ${username}`;

