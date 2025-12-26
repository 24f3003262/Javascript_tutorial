const PI=3.14159; // If i try to change the value of PI later then it will throw an exception in the console.
let radius;
let circumference;

document.getElementById("mySubmit").onclick=function(){
    radius=document.getElementById("myText").value;
    radius=Number(radius);
    circumference=2*PI*radius;
    document.getElementById("myH3").textContent=circumference+" cm";
}



