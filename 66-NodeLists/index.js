// Nodelist = Static collection of HTML elements by id,class,elements
// Can be created by using querySelectorAll()
// Similar to an array, but no map,reduce,filter
// Nodelist doesnt automatically update to reflect changes
// They have a forEach method


let buttons=document.querySelectorAll("button");

// add html/css properties

buttons.forEach(button => {
    button.style.backgroundColor="green";
    button.textContent+="👱";
});

//add eventlister
buttons.forEach(button=>{
    button.addEventListener('click',event=>{
        event.target.style.backgroundColor="purple";
    });
    button.addEventListener('mouseover',event=>{
        event.target.style.backgroundColor="red";
    
    });
    button.addEventListener('mouseout',event=>{
        event.target.style.backgroundColor="green";
    });

});


//add element
const newButton=document.createElement("button");
newButton.textContent="Button 5";
newButton.classList="myButtons";

document.body.appendChild(newButton);


console.log(buttons); //4 in the nodelist but 5th only in DOM


buttons=document.querySelectorAll("button");
console.log(buttons); //5


//remove
buttons.forEach(button=>{
    button.addEventListener('click',event=>{
        event.target.remove();
        buttons=document.querySelectorAll("button");
        console.log(buttons);
    });
});