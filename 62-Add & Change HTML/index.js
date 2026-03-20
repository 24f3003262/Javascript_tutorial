// STEPS

//1 Create elem

const newH1=document.createElement('h1');


//2 add attributes/properties
newH1.textContent="I like pizza!";
newH1.id="myH1";
newH1.style.color="tomato";
newH1.style.textAlign="center";

//3 append element to dom

// document.body.append(newH1);
// document.body.prepend(newH1);

// document.getElementById("box1").append(newH1);
// document.getElementById("box2").prepend(newH1);

// const box2=document.getElementById("box2");
// document.body.insertBefore(newH1,box2);

// const boxes=document.querySelectorAll(".box");
// document.body.insertBefore(newH1,boxes[1]);

// remove html element

// document.body.removeChild(newH1);

// document.getElementById("box2").removeChild(newH1);




//List example

//1 create elem
const newListItem=document.createElement('li');

//2 add attributes/properties
newListItem.textContent="coconut";
newListItem.id="coconut";
newListItem.style.fontWeight="bold";
newListItem.style.backgroundImage="linear-gradient(to right,red,blue)"


//3 append

// document.getElementById("fruits").append(newListItem);
// document.getElementById("fruits").prepend(newListItem);

// const orange=document.getElementById("banana");
// document.getElementById("fruits").insertBefore(newListItem,orange);


const boxes=document.querySelectorAll("#fruits li");

document.getElementById("fruits").insertBefore(newListItem,boxes[2])



//4 remove

// document.getElementById("fruits").removeChild(newListItem);