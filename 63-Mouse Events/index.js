// eventListener = Listen for specific events to create interactive web pages
// some are : click,mouseover,mouseout

//.addEventListener(event,callback/anon func/arrow func);



// function changeColor(event){
//     console.log(event);
//     event.target.style.backgroundColor="red";
//     event.target.textContent="OUCH!😖"
// }

const myBox=document.getElementById("myBox");
const myButton=document.getElementById("myButton");


myButton.addEventListener("click",event=>{
    myBox.style.backgroundColor="red";
    myBox.textContent="OUCH!😖"

});


myButton.addEventListener("mouseover",event=>{
    myBox.style.backgroundColor="yellow";
    myBox.textContent="Don't do it🙂🔪🫵";
})

myButton.addEventListener("mouseout",event=>{
    myBox.style.backgroundColor="lightgreen";
    myBox.textContent="ClIcK mE🤔";
})