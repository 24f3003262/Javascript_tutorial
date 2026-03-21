
// add, remove, toggle,replace,contains

// const myBtn=document.getElementById("myBtn");

// const myH1=document.getElementById("myH1");


// console.log(myBtn.classList);

// myBtn.addEventListener('mouseover',event=>{
//     event.target.classList.add("hover");
// });

// myBtn.addEventListener('mouseout',event=>{
//     event.target.classList.remove("hover");
// });

// myBtn.classList.add("enabled");
// myH1.classList.add("enabled");


// myBtn.addEventListener('click',event=>{
//     if(event.target.classList.contains("disabled")){
//         event.target.textContent+="😖😖";
//     }else{
//         event.target.classList.replace("enabled","disabled");
//     }
// });
// myH1.addEventListener('click',event=>{
//     if(event.target.classList.contains("disabled")){
//         event.target.textContent+="😖😖";
//     }else{
//         event.target.classList.replace("enabled","disabled");
//     }
// });



let buttons=document.querySelectorAll("button");

buttons.forEach(button=>{
    button.classList.add("enabled");
});

buttons.forEach(button=>{
    button.addEventListener('mouseover',event=>{
        event.target.classList.toggle("hover");
    });
}); 
buttons.forEach(button=>{
    button.addEventListener('mouseout',event=>{
        event.target.classList.toggle("hover");
    });
}); 

buttons.forEach(button=>{
    button.addEventListener('click',event=>{
        if(event.target.classList.contains("disabled")){
            event.target.textContent+="😖😖";
        }else{
            event.target.classList.toggle("enabled");
            event.target.classList.toggle("disabled");
        }
    });

});