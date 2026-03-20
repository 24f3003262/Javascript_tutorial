//events: keydown,keyup

const myBox=document.getElementById("myBox");

const moveAmt=10;

let x=0;
let y=0;

document.addEventListener("keydown",event=>{
    myBox.textContent="😖";
    myBox.style.backgroundColor="tomato";
});
document.addEventListener("keyup",event=>{
    myBox.textContent="🤔";
    myBox.style.backgroundColor="lightblue";
});
document.addEventListener("keydown",event=>{

    if(event.key.startsWith("Arrow")){
        event.preventDefault();
        switch(event.key){
            case "ArrowUp":
                y-=moveAmt;
                break
            case "ArrowDown":
                y+=moveAmt;
                break
            case "ArrowLeft":
                x-=moveAmt;
                break
            case "ArrowRight":
                x+=moveAmt;
        }
        myBox.style.top=`${y}px`;
        myBox.style.left=`${x}px`;

    }
});
